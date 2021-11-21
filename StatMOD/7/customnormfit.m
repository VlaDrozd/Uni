function [xm, s20, s2] = customnormfit(x,alpha)
    xm = mean(x);
    sum20 = 0;
    sum2 = 0;
    n = length(x);
    for i = 1 : n
        sum20 = sum20 + (x(i) - alpha) ^ 2;
        sum2 = sum2 + (x(i) - xm) ^ 2;
    end
    s20 = sum20 / length(x);
    s2 = sum2 / length(x);
end
