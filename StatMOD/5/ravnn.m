n = 1000;
a = -100;
b = 100;
X = double.empty(0,n);
for i=1:n
X(i) = unifrnd(a,b);
end
count=10;
Xsort=sort(X);
l=(Xsort(n)-Xsort(1))/count;
x=Xsort(1): 0.1 : Xsort(n);
y=unifpdf(x,a,b);
y=y*n*l; 
figure;
hold on;
histogram(Xsort,count);
plot(x,y,'-r');
hold off;
grid on;
