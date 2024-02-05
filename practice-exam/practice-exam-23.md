# Practice Exam 23

Click on the **Answer** button for the correct answer and its explanation.

If this practice exam has been helpful to you please share it with others and react to this below.

---

1. A user is planning to migrate an application workload to the AWS Cloud. <br/> Which control becomes the responsibility of AWS once the migration is complete?
    - A. Patching the guest operating system
    - B. Maintaining physical and environmental controls
    - C. Protecting communications and maintaining zone security
    - D. Patching specific applications

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: B

    </details>

2. Which services can be used to deploy applications on AWS? (Choose two.)
    - A. AWS Elastic Beanstalk
    - B. AWS Config
    - C. AWS OpsWorks
    - D. AWS Application Discovery Service
    - E. Amazon Kinesis

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: AC

    Explanation: <https://d0.awsstatic.com/whitepapers/overview-of-deployment-options-on-aws.pdf>

    </details>

3. Which AWS service can be used to provide an on-demand, cloud-based contact center?
    - A. AWS Direct Connect
    - B. Amazon Connect
    - C. AWS Support Center
    - D. AWS Managed Services

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: B

    Explanation: <https://aws.amazon.com/connect/customers/>

    </details>

4. What tool enables customers without an AWS account to estimate costs for almost all AWS services?
    - A. Cost Explorer
    - B. TCO Calculator
    - C. AWS Budgets
    - D. Simple Monthly Calculator

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: D

    Explanation: <https://aws.amazon.com/aws-cost-management/aws-cost-explorer/>

    </details>

5. Which component must be attached to a VPC to enable inbound Internet access?
    - A. NAT gateway
    - B. VPC endpoint
    - C. VPN connection
    - D. Internet gateway

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: D

    Explanation: <https://d1.awsstatic.com/whitepapers/aws-security-whitepaper.pdf>

    </details>

6. Which pricing model would result in maximum Amazon Elastic Compute Cloud (Amazon EC2) savings for a database server that must be online for one year?
    - A. Spot Instance
    - B. On-Demand Instance
    - C. Partial Upfront Reserved Instance
    - D. No Upfront Reserved Instance

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: C

    Explanation: <https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-reserved-instances.html>

    </details>

7. A company has a MySQL database running on a single Amazon EC2 instance. The company now requires higher availability in the event of an outage. <br/> Which set of tasks would meet this requirement?
    - A. Add an Application Load Balancer in front of the EC2 instance
    - B. Configure EC2 Auto Recovery to move the instance to another Availability Zone
    - C. Migrate to Amazon RDS and enable Multi-AZ
    - D. Enable termination protection for the EC2 instance to avoid outages

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: C

    Explanation: <https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.MultiAZ.html>

    </details>

8. A company wants to ensure that AWS Management Console users are meeting password complexity requirements. <br/> How can the company configure password complexity?
    - A. Using an AWS IAM user policy
    - B. Using an AWS Organizations service control policy (SCP)
    - C. Using an AWS IAM account password policy
    - D. Using an AWS Security Hub managed insight

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: C

    Explanation: <https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_passwords_account-policy.html>

    </details>

9. Under the AWS shared responsibility model, which of the following is the customer's responsibility?
    - A. Patching guest OS and applications
    - B. Patching and fixing flaws in the infrastructure
    - C. Physical and environmental controls
    - D. Configuration of AWS infrastructure devices

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: A

    </details>

10. Which of the following tasks is required to deploy a PCI-compliant workload on AWS?
    - A. Use any AWS service and implement PCI controls at the application layer
    - B. Use an AWS service that is in-scope for PCI compliance and raise an AWS support ticket to enable PCI compliance at the application layer
    - C. Use any AWS service and raise an AWS support ticket to enable PCI compliance on that service
    - D. Use an AWS service that is in scope for PCI compliance and apply PCI controls at the application layer

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: D

    Explanation: <https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-pci-controls.html>

    </details>

11. A company is building an application that requires the ability to send, store, and receive messages between application components. The company has another requirement to process messages in first-in, first-out (FIFO) order. <br/> Which AWS service should the company use?
    - A. AWS Step Functions
    - B. Amazon Simple Notification Service (Amazon SNS)
    - C. Amazon Kinesis Data Streams
    - D. Amazon Simple Queue Service (Amazon SQS)

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: D

    Explanation: <https://aws.amazon.com/sqs/faqs/>

    </details>

12. AnyCompany recently purchased Example Corp. Both companies use AWS resources, and AnyCompany wants a single aggregated bill.  <br/> Which option allows AnyCompany to receive a single bill?
    - A. Example Corp. must submit a request to its AWS solutions architect or AWS technical account manager to link the accounts and consolidate billing.
    - B. AnyCompany must create a new support case in the AWS Support Center requesting that both bills be combined.
    - C. Send an invitation to join the organization from AnyCompany's AWS Organizations master account to Example Corp.
    - D. Migrate the Example Corp. VPCs, Amazon EC2 instances, and other resources into the AnyCompany AWS account.

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: A

    Explanation: <https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/awsaccountbilling-aboutv2.pdf>

    </details>

13. Which tool can be used to create alerts when the actual or forecasted cost of AWS services exceeds a certain threshold?
    - A. Cost Explorer
    - B. AWS Budgets
    - C. AWS Cost and Usage Report
    - D. AWS CloudTrail

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: B

    Explanation: <https://aws.amazon.com/getting-started/hands-on/control-your-costs-free-tier-budgets/>

    </details>

14. A user has limited knowledge of AWS services, but wants to quickly deploy a scalable Node.js application in the AWS Cloud. <br/> Which service should be used to deploy the application?
    - A. AWS CloudFormation
    - B. AWS Elastic Beanstalk
    - C. Amazon EC2
    - D. AWS OpsWorks

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: B

    Explanation: <https://aws.amazon.com/elasticbeanstalk/>

    </details>

15. Which AWS Trusted Advisor check is available to all AWS users?
    - A. Core checks
    - B. All checks
    - C. Cost optimization checks
    - D. Fault tolerance checks

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: A

    Explanation: <https://www.amazonaws.cn/en/support/trustedadvisor/faq/#checks>

    </details>

16. A web developer is concerned that a DDoS attack could target an application. <br/> Which AWS services or features can help protect against such an attack? (Choose two.)
    - A. AWS Shield
    - B. AWS CloudTrail
    - C. Amazon CloudFront
    - D. AWS Support Center
    - E. AWS Service Health Dashboard

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: AC

    Explanation: <https://aws.amazon.com/shield/>

    </details>

17. Which AWS service gives users on-demand, self-service access to AWS compliance control reports?
    - A. AWS Config
    - B. Amazon GuardDuty
    - C. AWS Trusted Advisor
    - D. AWS Artifact

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: D

    Explanation: <https://aws.amazon.com/artifact>

    </details>

18. A company wants to provide one of its employees with access to Amazon RDS. The company also wants to limit the interaction to only the AWS CLI and AWS software development kits (SDKs). <br/> Which combination of actions should the company take to meet these requirements while following the principles of least privilege? (Choose two.)
    - A. Create an IAM user and provide AWS Management Console access only.
    - B. Create an IAM user and provide programmatic access only.
    - C. Create an IAM role and provide AWS Management Console access only.
    - D. Create an IAM policy with administrator access and attach it to the IAM user.
    - E. Create an IAM policy with Amazon RDS access and attach it to the IAM user.

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: BE

    </details>

19. A company has a compliance requirement to record and evaluate configuration changes, as well as perform remediation actions on AWS resources. <br/> Which AWS service should the company use?
    - A. AWS Config
    - B. AWS Secrets Manager
    - C. AWS CloudTrail
    - D. AWS Trusted Advisor

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: A

    Explanation: <https://aws.amazon.com/config/>

    </details>

20. What are the advantages of deploying an application with Amazon EC2 instances in multiple Availability Zones? (Choose two.)
    - A. Preventing a single point of failure
    - B. Reducing the operational costs of the application
    - C. Allowing the application to serve cross-region users with low latency
    - D. Increasing the availability of the application
    - E. Increasing the load of the application

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: AD

    Explanation: <https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-increase-availability.html>

    </details>

21. A workload on AWS will run for the foreseeable future by using a consistent number of Amazon EC2 instances. <br/> What pricing model will minimize cost while ensuring that compute resources remain available?
    - A. Dedicated Hosts
    - B. On-Demand Instances
    - C. Spot Instances
    - D. Reserved Instances

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: D

    Explanation: <https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-reserved-instances.html>

    </details>

22. Which tool can be used to identify scheduled changes to the AWS infrastructure?
    - A. AWS Personal Health Dashboard
    - B. AWS Trusted Advisor
    - C. Billing Dashboard
    - D. AWS Config

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: A

    Explanation: <https://aws.amazon.com/premiumsupport/technology/personal-health-dashboard/>

    </details>

23. Which of the following is the customer's responsibility when using Amazon RDS?
    - A. Patching the operating system of underlying hardware
    - B. Controlling traffic to and from the database through security groups
    - C. Running backups that enable point-in-time recovery of a DB instance
    - D. Replacing failed DB instances

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: B

    Explanation: <https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.html>

    </details>

24. What is the customer's responsibility when using AWS Lambda?
    - A. Operating system configuration
    - B. Application management
    - C. Platform management
    - D. Code encryption

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: D

    Explanation: <https://aws.amazon.com/lambda/security-overview-of-aws-lambda/>

    </details>

25. A company wants to be notified when its AWS Cloud costs or usage exceed defined thresholds. <br/> Which AWS service will support these requirements?
    - A. AWS Budgets
    - B. Cost Explorer
    - C. AWS CloudTrail
    - D. Amazon Macie

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: A

    Explanation: <https://aws.amazon.com/aws-cost-management/aws-budgets/>

    </details>

26. Which AWS service provides the ability to host a NoSQL database in the AWS Cloud?
    - A. Amazon Aurora
    - B. Amazon DynamoDB
    - C. Amazon RDS
    - D. Amazon Redshift

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: B

    Explanation: <https://aws.amazon.com/nosql/>

    </details>

27. Which AWS service allows customers to purchase unused Amazon EC2 capacity at an often discounted rate?
    - A. Reserved Instances
    - B. On-Demand Instances
    - C. Dedicated Instances
    - D. Spot Instances

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: D

    Explanation: <https://aws.amazon.com/ec2/spot/>

    </details>

28. Which AWS service or feature requires an internet service provider (ISP) and a colocation facility to be implemented?
    - A. AWS VPN
    - B. Amazon Connect
    - C. AWS Direct Connect
    - D. Internet gateway

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: C

    Explanation: <https://aws.amazon.com/directconnect/partners/>

    </details>

29. Which AWS services offer compute capabilities? (Choose two.)
    - A. Amazon EC2
    - B. Amazon S3
    - C. Amazon Elastic Block Store (Amazon EBS)
    - D. Amazon Cognito
    - E. AWS Lambda

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: AE

    Explanation: <https://docs.aws.amazon.com/whitepapers/latest/aws-overview/compute-services.html>

    </details>

30. Which AWS service can be used to privately store and manage versions of source code?
    - A. AWS CodeBuild
    - B. AWS CodeCommit
    - C. AWS CodePipeline
    - D. AWS CodeStar

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: B

    Explanation: <https://docs.aws.amazon.com/codecommit/latest/userguide/welcome.html>

    </details>

31. Which AWS service should a cloud practitioner use to identify security vulnerabilities of an AWS account?
    - A. AWS Secrets Manager
    - B. Amazon Cognito
    - C. Amazon Macie
    - D. AWS Trusted Advisor

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: D

    Explanation: <https://www.coalfire.com/the-coalfire-blog/march-2019/aws-trusted-advisor-for-security-compliance>

    </details>

32. A company wants to ensure its infrastructure is designed for fault tolerance and business continuity in the event of an environmental disruption. <br/> Which AWS infrastructure component should the company replicate across?
    - A. Edge locations
    - B. Availability Zones
    - C. Regions
    - D. Amazon Route 53

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: B

    Explanation: <https://d36cz9buwru1tt.cloudfront.net/AWS_Building_Fault_Tolerant_Applications.pdf>

    </details>

33. Which AWS service or feature is used to send both text and email messages from distributed applications?
    - A. Amazon Simple Notification Service (Amazon SNS)
    - B. Amazon Simple Email Service (Amazon SES)
    - C. Amazon CloudWatch alerts
    - D. Amazon Simple Queue Service (Amazon SQS)

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: A

    Explanation: <https://aws.amazon.com/sns/faqs/>

    </details>

34. Which AWS Cloud design principles can help increase reliability? (Choose two.)
    - A. Using monolithic architecture
    - B. Measuring overall efficiency
    - C. Testing recovery procedures
    - D. Adopting a consumption model
    - E. Automatically recovering from failure

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: CE

    Explanation: <https://wa.aws.amazon.com/wat.pillar.reliability.en.html>

    </details>

35. A company is planning to launch an ecommerce site in a single AWS Region to a worldwide user base. <br/> Which AWS services will allow the company to reach users and provide low latency and high transfer speeds? (Choose two.)
    - A. Application Load Balancer
    - B. AWS Global Accelerator
    - C. AWS Direct Connect
    - D. Amazon CloudFront
    - E. AWS Lambda

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: AD

    Explanation: <https://aws.amazon.com/cloudfront/faqs/>

    </details>

36. A company wants to connect to AWS over a private, low-latency connection from its remote office. <br/> What is the recommended method to meet these requirements?
    - A. Create a VPN tunnel
    - B. Connect across the public internet
    - C. Use VPC peering to create a connection.
    - D. Use AWS Direct Connect.

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: D

    Explanation: <https://aws.amazon.com/getting-started/projects/connect-data-center-to-aws/>

    </details>

37. Which AWS service can be used to retrieve compliance reports on demand?
    - A. AWS Secrets Manager
    - B. AWS Artifact
    - C. AWS Security Hub
    - D. AWS Certificate Manager

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: B

    Explanation: <https://aws.amazon.com/artifact/>

    </details>

38. A company has an AWS-hosted website located behind an Application Load Balancer. The company wants to safeguard the website from SQL injection or cross-site scripting. <br/> Which AWS service should the company use?
    - A. Amazon GuardDuty
    - B. AWS WAF
    - C. AWS Trusted Advisor
    - D. Amazon Inspector

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: B

    Explanation: <https://aws.amazon.com/waf/faq/>

    </details>

39. How should a web application be deployed to ensure high availability in the AWS Cloud?
    - A. Deploy multiple instances of the application in multiple Availability Zones.
    - B. Deploy multiple instances of the application in a single Availability Zone.
    - C. Deploy the application to a compute-optimized Amazon EC2 instance in a single Availability Zone.
    - D. Deploy the application in one Amazon EC2 instance in an Auto Scaling group.

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: A

    Explanation: <https://www.betsol.com/blog/how-to-make-high-availability-web-applications-on-amazon-web-services/>

    </details>

40. A company is running a self-managed Oracle database directly on Amazon EC2 for its steady-state database. The company wants to reduce compute costs. <br/> Which option should the company use to maximize savings over a 3-year term?
    - A. EC2 Dedicated Instances
    - B. EC2 Spot Instances
    - C. EC2 Reserved Instances
    - D. EC2 On-Demand Instances

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: C

    Explanation: <https://aws.amazon.com/choosing-a-cloud-platform/>

    </details>

41. An external auditor has requested that a company provide a list of all its IAM users, including the status of users' credentials and access keys. <br/> What it the SIMPLEST way to provide this information?
    - A. Create an IAM user account for the auditor, granting the auditor administrator permissions.
    - B. Take a screenshot of each user's page in the AWS Management Console, then provide the screenshots to the auditor.
    - C. Download the IAM credential report, then provide the report to the auditor.
    - D. Download the AWS Trusted Advisor report, then provide the report to the auditor.

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: C

    Explanation: <https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_getting-report.html>

    </details>

42. What are the benefits of consolidated billing for AWS Cloud services? (Choose two.)
    - A. Volume discounts
    - B. A minimal additional fee for use
    - C. One bill for multiple accounts
    - D. Installment payment options
    - E. Custom cost and usage budget creation

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: AC

    Explanation: <https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/consolidated-billing.html>

    </details>

43. A company is expecting a short-term spike in internet traffic for its application. During the traffic increase, the application cannot be interrupted. The company also needs to minimize cost and maximize flexibility. <br/> Which Amazon EC2 instance type should the company use to meet these requirements?
    - A. On-Demand Instances
    - B. Spot Instances
    - C. Reserved Instances
    - D. Dedicated Hosts

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: B

    Explanation: <https://aws.amazon.com/ec2/faqs/>

    </details>

44. A company wants to track AWS resource configuration changes for compliance reasons. <br/> Which AWS feature can be used to meet this requirement?
    - A. AWS Cost and Usage Report
    - B. AWS Organizations service control policies (SCPs)
    - C. AWS Config rules
    - D. VPC Flow Logs

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: C

    Explanation: <https://aws.amazon.com/config/>

    </details>

45. A company is building an application that needs to deliver images and videos globally with minimal latency. <br/> Which approach can the company use to accomplish this in a cost effective manner?
    - A. Deliver the content through Amazon CloudFront.
    - B. Store the content on Amazon S3 and enable S3 cross-region replication.
    - C. Implement a VPN across multiple AWS Regions.
    - D. Deliver the content through AWS PrivateLink.

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: A

    Explanation: <https://aws.amazon.com/blogs/industries/how-to-build-a-global-scalable-low-latency-and-secure-machine-learning-medical-imaging-analysis-platform-on-aws/>

    </details>

46. The AWS IAM best practice for granting least privilege is to:
    - A. apply an IAM policy to an IAM group and limit the size of the group.
    - B. require multi-factor authentication (MFA) for all IAM users.
    - C. require each IAM user who has different permissions to have multiple passwords.
    - D. apply an IAM policy only to IAM users who require it.

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: D

    Explanation: <https://kirkpatrickprice.com/blog/best-practices-for-privilege-management-in-aws/>

    </details>

47. Which cloud computing benefit does AWS demonstrate with its ability to offer lower variable costs as a result of high purchase volumes?
    - A. Pay-as-you-go pricing
    - B. High availability
    - C. Global reach
    - D. Economies of scale

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: D

    Explanation: <https://innovationtactics.com/amazon-business-model-amazon-web-services/>

    </details>

48. A pharmaceutical company operates its infrastructure in a single AWS Region. The company has thousands of VPCs in a various AWS accounts that it wants to interconnect. <br/> Which AWS service or feature should the company use to help simplify management and reduce operational costs?
    - A. VPC endpoint
    - B. AWS Direct Connect
    - C. AWS Transit Gateway
    - D. VPC peering

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: C

    Explanation: <https://d1.awsstatic.com/whitepapers/building-a-scalable-and-secure-multi-vpc-aws-network-infrastructure.pdf>

    </details>

49. How can AWS enable a company to control expenses as an application's usage changes unpredictably?
    - A. AWS will refund the cost difference if a customer moves to larger servers.
    - B. The application can be built to scale up or down automatically as resources are needed
    - C. Spot instances will automatically be used if the price is lower than on-demand instances.
    - D. Amazon CloudWatch will automatically predict what resources are needed.

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: B

    </details>

50. Which AWS service or feature can be used to prevent SQL injection attacks?
    - A. Security groups
    - B. Network ACLs
    - C. AWS WAF
    - D. IAM policy

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: C

    Explanation:
    <https://docs.aws.amazon.com/waf/latest/developerguide/classic-web-acl-sql-conditions.html>

    </details>

Please feel free to comment below if any information is inaccurate or if any answers need correction.

[<img align="center" src="../images/list.png" height="30" width="30"/> Exam List](../practice-exam/exams.md)
