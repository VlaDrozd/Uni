n = 400; a1 = 10; a2 = 10; 
A = [a1 a2];
sigma1 = 2; sigma2 = 2.5;
r12 = 0.5;
R11=sigma1^2; R22=sigma2^2;
R12=r12*sigma1*sigma2;
R21=r12*sigma1*sigma2;
R = [R11 R12; R21 R22];
normr1 = mvnrnd(A,R,n);
normr2= customnormrnd(A,R,n);
figure
scatter(normr1(:,1), normr1(:,2), 'b.');
grid on
figure
scatter(normr2(:,1), normr2(:,2), 'r.');
grid on
