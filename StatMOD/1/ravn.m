a = 0; b = 100;
x = -50:1:150;

y1 = unif(x, a, b);
y2 = unifpdf(x,a,b);

figure
subplot(2,1,1);
plot(x, y1, 'r')

subplot(2,1,2);
plot(x, y2, 'y')
