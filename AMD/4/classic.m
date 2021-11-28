clc;
syms x1 x2;
 
c00 = 0;
c10 = 2;
c01 = 0;
c20 = 1;
c02 = 0;
c11 = 3;
g0_x = c00;
g1_x = c10*x1 + c01*x2;
g2_x = c20*x1^2 + c02*x2^2 + c11*x1*x2;
y_x = g0_x + g1_x + g2_x;
 
x = -10:0.5:10;
[x1, x2] = meshgrid(x, x);
y = double(subs(y_x, {'x1', 'x2'}, {x1, x2}));
figure;
meshc(x1, x2, y);

