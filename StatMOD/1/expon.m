function y = expon(x, lambda)
y = zeros(size(x));
for i=1:length(x)
if x(i) < 0
y(i)=0;
else
y(i)=lambda^(-1)*exp(-lambda^(-1)*x(i));
end
end
end
