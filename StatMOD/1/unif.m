function y = unif(x, a, b)
y = zeros(size(x));
for i=1:length(x)
if ((x(i)<a) || (x(i)>b))
y(i)=0;
else
y(i)=1/(b-a);
end
end
end 
