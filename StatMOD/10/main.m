clear;
clc;

a = 3; 
b = 5; 
c = 10;  
sigma = 0.01;  
N = 50; 
alpha = 0.95;

a_gr = 1;
b_gr = 5;

shag = (b_gr - a_gr) / N;

Q = [a b c];

for i=1:N
   x(i) = a + i * shag;
   f(i) = a + b * x(i) + c * x(i) .^ 2;
   Ft(i,1) = 1;
   Ft(i,2) = x(i);
   Ft(i,3) = x(i) ^ 2;
   z(i) = normrnd(0, sigma);
end

y = Ft * Q' + z';

Q_estimation = (Ft' * Ft) \ (Ft' * y);
fprintf('\nОценки\n');
fprintf('alpha: %f\n', Q_estimation(1));
fprintf('beta: %f\n', Q_estimation(2));
fprintf('gamma: %f\n', Q_estimation(3));

S_estimation = (y - Ft * Q_estimation)' * (y - Ft * Q_estimation) ./ N;
fprintf('Дисперсия ошибок: %f\n', S_estimation);

figure(1);
p1 = plot(x, f, 'r-o');
hold on

x_avg = 0;
f_avg = 0;

for i=1:N
   yO(i) = Q_estimation(1) + Q_estimation(2) * x(i) + Q_estimation(3) * x(i)^2;
   yN(i) = Q_estimation(1) + Q_estimation(2) * x(i) + Q_estimation(3) * x(i)^2 + z(i);
   x_avg = x_avg + x(i);
   f_avg = f_avg + f(i);   
end

x_avg = x_avg ./ N;
f_avg = f_avg ./ N;
p2 = plot(x, yO, 'b-o');
hold on
p3 = plot(x, yN, 'k-o');
legend([p1 p2 p3], 'Теоретическая функция регрессии', 'Эмпирическая функция регресии', 'Функция наблюдений (поля рассеивания)')
hold off
grid on

t = abs(tinv((1 - alpha) / 2, N - 2));

sum_x = 0;
sum_f = 0;
sum_kv_x = 0;

for i=1:N
    sum_kv_x = sum_kv_x + x(i) .^ 2;
    sum_x = sum_x + (x(i) - x_avg) .^ 2;
    sum_f = sum_f + (f(i) - f_avg) .^ 2;
end

T_a = a ./ (sqrt(sum_f * sum_kv_x / N / (N - 2) / sum_x));
T_b = b ./ (sqrt(sum_f / (N - 2) / sum_x));

fprintf('Критерий значимости T: %f\n', t);
fprintf('Статистика Ta: %f\n', T_a);
fprintf('Статистика Tb: %f\n', T_b);

if abs(T_a) < t
    disp('Коофициент a не имеет значения');
else
    disp('Коофициент a имеет значение');
end

if abs(T_b) < t
    disp('Коофициент b не имеет значения');
else
    disp('Коофициент b имеет значение');
end

Y_estimation = Ft * Q_estimation;
Y_diap = [Y_estimation - t * sqrt(S_estimation * (Q * inv(Ft' * Ft) * Q')), Y_estimation + t * sqrt(S_estimation * (Q * inv(Ft' * Ft) * Q'))];

figure(2);
plot(x, Y_diap(:, 1), '-or', x, Y_diap(:, 2), '-ob')

grid on
