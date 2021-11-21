a = 0; b = 100;
x = -50:1:150;
lambda = 10;
 
y1 = unifcdf(x, a, b);
y2 = expcdf(x, lambda);
 
figure
subplot(2,1,1);
plot(x, y1, 'r')
 
subplot(2,1,2);
plot(x, y2, 'y')
