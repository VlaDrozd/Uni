clc
clear
syms a1 a2 x1 x2 x x_1 x_2
x = [x_1; x_2];
z = a1*x1 + a2*x2;
y = exp(z)-(z-1)^2;
x0 =[2;2];
a1_new = 1;
a2_new = 1;
 
A = [diff(y, x1) diff(y, x2)];
B = [diff(diff(y, x1), x1) diff(diff(y, x1), x2)
     diff(diff(y, x2), x1) diff(diff(y, x2), x2)];
 
y0 = y;
y1 = y0 + A*(x - x0);
y2 = y0 + A*(x - x0) + 0.5*(x-x0)'*B*(x-x0);
 
y0 = subs(y0, {a1, a2, x1, x2}, {a1_new, a2_new, x0(1), x0(2)});
y1 = subs(y1, {a1, a2, x1, x2}, {a1_new, a2_new, x0(1), x0(2)});
y2 = subs(y2, {a1, a2, x1, x2}, {a1_new, a2_new, x0(1), x0(2)});
 
[x1_new, x2_new] = meshgrid(0:0.1:3,0:0.1:3);
y_new = subs(y, {a1, a2, x1, x2}, {a1_new, a2_new, x1_new, x2_new});
y0_new = y0 + x1_new - x2_new.';
y1_new = subs(y1, {x_1, x_2}, {x1_new, x2_new});
y2_new = subs(y2, {x_1, x_2}, {x1_new, x2_new});
 
figure
mesh(x1_new, x2_new, double(y_new))
hold on
mesh(x1_new, x2_new, double(y0_new))
hold on
mesh(x1_new, x2_new, double(y1_new))
hold on
mesh(x1_new, x2_new, double(y2_new))
view(45,0)
grid on
hold off
