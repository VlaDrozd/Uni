function x=pirsen(k)
    x = 0;
    for i=1:k
        x = x+normrnd(0,1)^2;
    end
end
