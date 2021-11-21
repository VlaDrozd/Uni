b1=4; b2=5;
a1=3; a2=4;
[x1,x2]=meshgrid(0:0.2:10,0:0.2:10);
nx1=length(x1); nx2=length(x2);
f=magic(51);
for i=1:nx1   
    for j=1:nx2
        if ((x1(i,j)<b1)&& (x1(i,j)>a1)&& (x2(i,j)<b2) && (x2(i,j)>a2)&& (a1<b1) && (a2<b2))
            f(i,j)=(1/(b1-a1))*1/(b2-a2);
        else
            f(i,j)=0;
        end
    end
end
figure
mesh(x1,x2,f);
figure
contour(x1,x2,f,1);
