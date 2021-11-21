clc

clear

a = 1;

x = 0: 0.1:2;

y1 = exp(x)-(x-1).^2;

figure(1);

p1 = plot(x,y1,'b');

hold on

y2 = (exp(a)-(a-1)^2)+(-2*a+exp(a)+2)*(x-a)+1/2*(exp(a)-2)*(x-a).^2;

p2 = plot(x,y2,'r');

y3 = y2+(x-a).^3;

p3 = plot(x,y3,'go');

hold off

legend([p1 p2 p3],'f(x)','P1(x)','P2(x)');

grid on

syms x a

y = taylor(exp(x)+x.^2-2,a);