clear;
clc;

m = 10;
l = 10;
sigma_quad = 0.001;
xc = 75;
yc = 100;

x(1) = 0;

for k=1:m-1 
    x(k + 1) = x(k) + l;
end

for k=1:m
    y(k) = 0;
    p1 = plot(x(k), y(k), 'ko');
    hold on
end

p2 = plot(xc, yc, 'go');
hold on 

for i=1:m
   fi(i) = atan((yc - y(i)) / (xc - x(i)));
   alfa(i) = normrnd(fi(i), sigma_quad);
end

x0 = (y(2) - y(1) + x(1) * tan(alfa(1)) - x(2) * tan(alfa(2))) / (tan(alfa(1)) - tan(alfa(2)));
y0 = (x0 - x(1)) * tan(alfa(1)) + y(1);
p3 = plot(x0, y0, 'ro');
hold on

q0 = [x0 y0];
for i=1:m
   d(i) = (x0 - x(i)) .^ 2 + (y0 - y(i)) .^ 2;
   q(i, 1) = (y0 - y(i)) / d(i);
   q(i, 2) = (x0 - x(i)) / d(i);
   fiq(i) = atan((y0 - y(i)) / (x0 - x(i)));
end

estimation = q0' + ((q' * q) \ q') * (alfa' - fiq');
fprintf("ќценка: %f\n", estimation);
p4 = plot(estimation(1), estimation(2), 'mx');
hold on

for i=1:m
    yl = yc * 1.3;
    xl = (yl + tan(alfa(i)) * x(i)) ./ tan(alfa(i));
    p5 = plot([x(i) xl], [0 yl], 'k-');
    hold on
end

legend([p1 p2 p3 p4 p5], '(x_k,y_k)', '(x_c,y_c)', '(x_0,y_0)', 'estimationPoints', 'peleng')
hold off
