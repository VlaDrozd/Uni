a1=4; a2=2;
[x1,x2]=meshgrid(-10:0.5:10,-10:0.5:10);
R=[9 2;3 4];
r12=R(1,2)/sqrt(R(1,1)*R(2,2));
sigma1=sqrt(R(1,1)); sigma2=sqrt(R(2,2));
nx1=length(x1); nx2=length(x2);
for i=1:nx1
    for j=1:nx2
        f(i,j)=((1/(1-r12^2))*((x1(i,j)-a1)^2/sigma1^2-2*r12*(x1(i,j)-a1)*(x2(i,j)-a2)/(sigma1*sigma2)+(x2(i,j)-a2)^2/sigma2^2));
        dens(i,j)=1/(2*pi*sigma1*sigma2*sqrt(1-r12^2))*exp(-1/2*f(i,j));
    end
end
mesh(x1,x2,dens);
grid on
