x = -50:10:150;
lambda = 10;

y1 = expon(x, lambda);
y2 = exppdf(x, lambda);

figure

subplot(2,1,1);
plot(x, y1, 'r')

subplot(2,1,2);
plot(x, y2, 'y')
