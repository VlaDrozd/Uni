a1=2; a2=3;
x1=-30:0.5:30; x2=-30:0.5:30;
r12=0.3;
sigma1=1; sigma2=0.8;
s=4*pi*sqrt(sigma1^2*sigma2^2-r12^2*sigma1^2*sigma2^2);
nx1=length(x1); nx2=length(x2);
for i=1:nx1
    for j=1:nx2
        f(i,j)=((1/(1-r12^2))*((x1(i)-a1)^2/sigma1^2-2*r12*(x1(i)-a1)*(x2(j)-a2)/(sigma1*sigma2)+(x2(j)-a2)^2/sigma2^2));
    end
end
contour(x1,x2,f,1)
grid on
hold on
r2=a2+(r12*sigma2/sigma1)*(x1-a1);
r1=a1+(r12*sigma1/sigma2)*(x2-a2);
plot(x2,r1,r2,x1)
hold off
