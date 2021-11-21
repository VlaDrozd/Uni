function L = customnormfit(z, x)
    m = z(1);
    sigma = z(2);
    L = 1;
    pdf = normpdf(x, m, sigma);
    for i = 1:length(x)
        L = L * pdf(i);
    end
    L = - log(L);
    return
end
