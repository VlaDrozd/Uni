clc;
syms x1 x2;
 
X = [x1; x2];
c0 = 0;
c1 = [2 0];
c2 = [1 3; 0 0];
c0_x = c0;
c1_x = c1*X;
c2_x = (c2*X)'*X;
y_x = c0_x + c1_x + c2_x;

x = -10:0.5:10;
[x1, x2] = meshgrid(x, x);
y = double(subs(y_x, {'x1', 'x2'}, {x1, x2}));
figure;
meshc(x1, x2, y);
