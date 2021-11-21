clc; 
clear;
a1=0.3; 
a2=0.7;
b1=1;
b2=1;
x = -2: 1:10; 
[x1,x2] = meshgrid(x,x);
f1 = exp(a1*x1+a2*x2)-((a1*x1+a2*x2) - 1)^2;
mesh(x1,x2,f1) 
hold on 
d0=exp(a1*x1+a2*x2)-((a1*x1+a2*x2) - 1)^2;
dx1=exp(a1*x1+a2*x2)*a1-2*(a1*x1+a2*x2-1)*a1; 
dx2=exp(a1*x1+a2*x2)*a2-2*(a1*x1+a2*x2-1)*a2;
dx22=a2^2*exp(a1*x1+a2*x2)-2*a2^2; 
dx21=a2*exp(a1*x1+a2*x2)*a1-2*a2*a1; 
dx12=a1*exp(a1*x1+a2*x2)*a2-2*a1*a2; 
dx11=a1^2*exp(a1*x1+a2*x2)-2*a1^2;
f2 = d0+dx1*(x1-b1)+dx2*(x2-b2)+dx12*(x1-b1)*(x2-b2)+ 0.5*dx22*(x2-b2).^2 + 0.5*dx11*(x1-b1).^2; 
hold on
mesh(x1,x2,f2) 
hold off
