---
layout: exam
---

# Practice Exam 20

1. Which AWS service helps identify malicious or unauthorized activities in AWS accounts and workloads?
    - A. Amazon Rekognition
    - B. AWS Trusted Advisor
    - C. Amazon GuardDuty
    - D. Amazon CloudWatch

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: C

    Explanation: <https://aws.amazon.com/guardduty/>

    </details>

2. A company wants to try a third-party ecommerce solution before deciding to use it long term. <br/> Which AWS service or tool will support this effort?
    - A. AWS Marketplace
    - B. AWS Partner Network (APN)
    - C. AWS Managed Services
    - D. AWS Service Catalog

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: A

    Explanation: <https://aws.amazon.com/about-aws/whats-new/2019/09/aws-marketplace-easier-to-find-solutions-from-aws-console/>

    </details>

3. Which AWS service is a managed NoSQL database?
    - A. Amazon Redshift
    - B. Amazon DynamoDB
    - C. Amazon Aurora
    - D. Amazon RDS for MariaDB

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: B

    Explanation: <https://aws.amazon.com/dynamodb/>

    </details>

4. Which AWS service should be used to create a billing alarm?
    - A. AWS Trusted Advisor
    - B. AWS CloudTrail
    - C. Amazon CloudWatch
    - D. Amazon QuickSight

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: C

    Explanation: <https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/monitor_estimated_charges_with_cloudwatch.html>

    </details>

5. A company is hosting a web application in a Docker container on Amazon EC2. <br/> AWS is responsible for which of the following tasks?
    - A. Scaling the web application and services developed with Docker
    - B. Provisioning or scheduling containers to run on clusters and maintain their availability
    - C. Performing hardware maintenance in the AWS facilities that run the AWS Cloud
    - D. Managing the guest operating system, including updates and security patches

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: C

    Explanation: <https://aws.amazon.com/getting-started/tutorials/deploy-docker-containers/>

    </details>

6. Users are reporting latency when connecting to a website with a global customer base. <br/> Which AWS service will improve the customer experience by reducing latency?
    - A. Amazon CloudFront
    - B. AWS Direct Connect
    - C. Amazon EC2 Auto Scaling
    - D. AWS Transit Gateway

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: A

    Explanation: <https://aws.amazon.com/getting-started/tutorials/deliver-content-faster/>

    </details>

7. Which actions represent best practices for using AWS IAM? (Choose two.)
    - A. Configure a strong password policy
    - B. Share the security credentials among users of AWS accounts who are in the same Region
    - C. Use access keys to log in to the AWS Management Console
    - D. Rotate access keys on a regular basis
    - E. Avoid using IAM roles to delegate permissions

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: AD

    Explanation: <https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html>

    </details>

8. Which AWS feature or service can be used to capture information about incoming and outgoing traffic in an AWS VPC infrastructure?
    - A. AWS Config
    - B. VPC Flow Logs
    - C. AWS Trusted Advisor
    - D. AWS CloudTrail

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: B

    Explanation:
    <https://docs.aws.amazon.com/vpc/latest/userguide/flow-logs.html>

    </details>

9. A company wants to use an AWS service to monitor the health of application endpoints, with the ability to route traffic to healthy regional endpoints to improve application availability. <br/> Which service will support these requirements?
    - A. Amazon Inspector
    - B. Amazon CloudWatch
    - C. AWS Global Accelerator
    - D. Amazon CloudFront

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: C

    Explanation:
    - AWS Global Accelerator uses the AWS global network to optimize the path from your users to your applications, improving the performance of your traffic by as much as 60%.
    - AWS Global Accelerator continually monitors the health of your application endpoints and redirects traffic to healthy endpoints in less than 30 seconds.

    Reference: <https://aws.amazon.com/global-accelerator/?blogs-global-accelerator.sort-by=item.additionalFields.createdDate&blogs-global-accelerator.sort-order=desc&aws-global-accelerator-wn.sort-by=item.additionalFields.postDateTime&aws-global-accelerator-wn.sort-order=desc>

    </details>

10. According to the AWS Well-Architected Framework, what change management steps should be taken to achieve reliability in the AWS Cloud? (Choose two.)
    - A. Use AWS Config to generate an inventory of AWS resources
    - B. Use service limits to prevent users from creating or making changes to AWS resources
    - C. Use AWS CloudTrail to record AWS API calls into an auditable log file
    - D. Use AWS Certificate Manager to whitelist approved AWS resources and services
    - E. Use Amazon GuardDuty to validate configuration changes made to AWS resources

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: Ac

    </details>

11. Which service can be used to monitor and receive alerts for AWS account root user AWS Management Console sign-in events?
    - A. Amazon CloudWatch
    - B. AWS Config
    - C. AWS Trusted Advisor
    - D. AWS IAM

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: A

    Explanation: <https://aws.amazon.com/blogs/mt/monitor-and-notify-on-aws-account-root-user-activity/>

    </details>

12. Which design principle should be considered when architecting in the AWS Cloud?
    - A. Think of servers as non-disposable resources
    - B. Use synchronous integration of services
    - C. Design loosely coupled components
    - D. Implement the least permissive rules for security groups

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: C

    Explanation: <https://www.botmetric.com/blog/aws-cloud-architecture-design-principles/>

    </details>

13. Which AWS services can be used to move data from on-premises data centers to AWS? (Choose two.)
    - A. AWS Snowball
    - B. AWS Lambda
    - C. AWS ElastiCache
    - D. AWS Database Migration Service (AWS DMS)
    - E. Amazon API Gateway

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: AD

    Explanation: <https://aws.amazon.com/snowball/>

    </details>

14. A batch workload takes 5 hours to finish on an Amazon EC2 instance. The amount of data to be processed doubles monthly and the processing time is proportional. <br/> What is the best cloud architecture to address this consistently growing demand?
    - A. Run the application on a bigger EC2 instance size.
    - B. Switch to an EC2 instance family that better matches batch requirements.
    - C. Distribute the application across multiple EC2 instances and run the workload in parallel.
    - D. Run the application on a bare metal EC2 instance.

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: C

    </details>

15. Each department within a company has its own independent AWS account and its own payment method. New company leadership wants to centralize departmental governance and consolidate payments. <br/> How can this be achieved using AWS services or features?
    - A. Forward monthly invoices for each account. Then create IAM roles to allow cross-account access.
    - B. Create a new AWS account. Then configure AWS Organizations and invite all existing accounts to join.
    - C. Configure AWS Organizations in each of the existing accounts. Then link all accounts together.
    - D. Use Cost Explorer to combine costs from all accounts. Then replicate IAM policies across accounts.

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: B

    Explanation: <https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_accounts.html>

    </details>

16. The ability to horizontally scale Amazon EC2 instances based on demand is an example of which concept in the AWS Cloud value proposition?
    - A. Economy of scale
    - B. Elasticity
    - C. High availability
    - D. Agility

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: B

    </details>

17. An ecommerce company anticipates a huge increase in web traffic for two very popular upcoming shopping holidays. <br/> Which AWS service or feature can be configured to dynamically adjust resources to meet this change in demand?
    - A. AWS CloudTrail
    - B. Amazon EC2 Auto Scaling
    - C. Amazon Forecast
    - D. AWS Config

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: B

    Explanation: <https://aws.amazon.com/autoscaling/>

    </details>

18. Which AWS service enables users to securely connect to AWS resources over the public internet?
    - A. Amazon VPC peering
    - B. AWS Direct Connect
    - C. AWS VPN
    - D. Amazon Pinpoint

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: C

    Explanation: <https://d1.awsstatic.com/whitepapers/aws-security-whitepaper.pdf>

    </details>

19. Which tool is used to forecast AWS spending?
    - A. AWS Trusted Advisor
    - B. AWS Organizations
    - C. Cost Explorer
    - D. Amazon Inspector

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: C

    Explanation: <https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/ce-forecast.html>

    </details>

20. A company is running an ecommerce application hosted in Europe. To decrease latency for users who access the website from other parts of the world, the company would like to cache frequently accessed static content closer to the users. <br/> Which AWS service will support these requirements?
    - A. Amazon ElastiCache
    - B. Amazon CloudFront
    - C. Amazon Elastic File System (Amazon EFS)
    - D. Amazon Elastic Block Store (Amazon EBS)

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: B

    Explanation:
    - Amazon CloudFront employs a global network of edge locations and regional edge caches that cache copies of your content close to your viewers.
    - Amazon CloudFront ensures that end-user requests are served by the closest edge location.
    - As a result, viewer requests travel a short distance, improving performance for your viewers.
    - For files not cached at the edge locations and the regional edge caches, Amazon CloudFront keeps persistent connections with your origin servers so that those files can be fetched from the origin servers as quickly as possible.

    Reference: <https://aws.amazon.com/cloudfront/faqs/>

    </details>

21. Which of the following is a component of the AWS Global Infrastructure?
    - A. Amazon Alexa
    - B. AWS Regions
    - C. Amazon Lightsail
    - D. AWS Organizations

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: B

    Explanation: <https://aws.amazon.com/about-aws/global-infrastructure/>

    </details>

22. Which AWS service will help users determine if an application running on an Amazon EC2 instance has sufficient CPU capacity?
    - A. Amazon CloudWatch
    - B. AWS Config
    - C. AWS CloudTrail
    - D. Amazon Inspector

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: A

    Explanation: <https://aws.amazon.com/ec2/faqs/>

    </details>

23. Why is it beneficial to use Elastic Load Balancers with applications?
    - A. They allow for the conversion from Application Load Balancers to Classic Load Balancers.
    - B. They are capable of handling constant changes in network traffic patterns.
    - C. They automatically adjust capacity.
    - D. They are provided at no charge to users.

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: B

    Explanation: <https://docs.aws.amazon.com/elasticloadbalancing/latest/userguide/what-is-load-balancing.html>

    </details>

24. Which tasks are the customer's responsibility in the AWS shared responsibility model? (Choose two.)
    - A. Infrastructure facilities access management
    - B. Cloud infrastructure hardware lifecycle management
    - C. Configuration management of user's applications
    - D. Networking infrastructure protection
    - E. Security groups configuration

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: CE

    Explanation: <https://cloudacademy.com/blog/aws-shared-responsibility-model-security/>

    </details>

25. IT systems should be designed to reduce interdependencies, so that a change or failure in one component does not cascade to other components. <br/> This is an example of which principle of cloud architecture design?
    - A. Scalability
    - B. Loose coupling
    - C. Automation
    - D. Automatic scaling

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: B

    Explanation: <https://d1.awsstatic.com/whitepapers/AWS_Cloud_Best_Practices.pdf>

    </details>

26. Which AWS service or feature can enhance network security by blocking requests from a particular network for a web application on AWS? (Choose two.)
    - A. AWS WAF
    - B. AWS Trusted Advisor
    - C. AWS Direct Connect
    - D. AWS Organizations
    - E. Network ACLs

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: AE

    Explanation:
    - <https://aws.amazon.com/waf/>
    - <https://docs.aws.amazon.com/vpc/latest/userguide/vpc-network-acls.html>

    </details>

27. An application runs on multiple Amazon EC2 instances that access a shared file system simultaneously. <br/> Which AWS storage service should be used?
    - A. Amazon EBS
    - B. Amazon EFS
    - C. Amazon S3
    - D. AWS Artifact

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: B

    Explanation: <https://aws.amazon.com/efs/>

    </details>

28. A web application is hosted on AWS using an Elastic Load Balancer, multiple Amazon EC2 instances, and Amazon RDS. <br/> Which security measures fall under the responsibility of AWS? (Choose two.)
    - A. Running a virus scan on EC2 instances
    - B. Protecting against IP spoofing and packet sniffing
    - C. Installing the latest security patches on the RDS instance
    - D. Encrypting communication between the EC2 instances and the Elastic Load Balancer
    - E. Configuring a security group and a network access control list (NACL) for EC2

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: BC

    </details>

29. What is the benefit of elasticity in the AWS Cloud?
    - A. Ensure web traffic is automatically spread across multiple AWS Regions.
    - B. Minimize storage costs by automatically archiving log data.
    - C. Enable AWS to automatically select the most cost-effective services.
    - D. Automatically adjust the required compute capacity to maintain consistent performance.

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: D

    Explanation: <https://aimconsulting.com/insights/blog/the-elastic-cloud-opportunity/>

    </details>

30. The continual reduction of AWS Cloud pricing is due to:
    - A. pay-as-you go pricing
    - B. the AWS global infrastructure
    - C. economies of scale
    - D. reserved storage pricing

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: C

    </details>

31. A company needs an Amazon S3 bucket that cannot have any public objects due to compliance requirements. <br/> How can this be accomplished?
    - A. Enable S3 Block Public Access from the AWS Management Console.
    - B. Hold a team meeting to discuss the importance if only uploading private S3 objects.
    - C. Require all S3 objects to be manually approved before uploading.
    - D. Create a service to monitor all S3 uploads and remove any public uploads.

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: A

    Explanation: <https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html>

    </details>

32. A Cloud Practitioner identifies a billing issue after examining the AWS Cost and Usage report in the AWS Management Console. <br/> Which action can be taken to resolve this?
    - A. Open a detailed case related to billing and submit it to AWS Support for help.
    - B. Upload data describing the issue to a new object in a private Amazon S3 bucket.
    - C. Create a pricing application and deploy it to a right-sized Amazon EC2 instance for more information.
    - D. Proceed with creating a new dashboard in Amazon QuickSight.

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: A

    Explanation: < https://docs.aws.amazon.com/awssupport/latest/user/case-management.html>

    </details>

33. What does the AWS Simple Monthly Calculator do?
    - A. Compares on-premises costs to colocation environments
    - B. Estimates monthly billing based on projected usage
    - C. Estimates power consumption at existing data centers
    - D. Estimates CPU utilization

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: B

    Explanation: <https://aws.amazon.com/blogs/aws/estimate-your-c/>

    </details>

34. Who is responsible for patching the guest operating system for Amazon RDS?
    - A. The AWS Product team
    - B. The customer Database Administrator
    - C. Managed partners
    - D. AWS Support

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: B

    Explanation: <https://aws.amazon.com/compliance/shared-responsibility-model/>

    </details>

35. Which AWS services may be scaled using AWS Auto Scaling? (Choose two.)
    - A. Amazon EC2
    - B. Amazon DynamoDB
    - C. Amazon S3
    - D. Amazon Route 53
    - E. Amazon Redshift

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: AB

    Explanation: <https://aws.amazon.com/autoscaling/faqs/>

    </details>

36. Which of the following are benefits of AWS Global Accelerator? (Choose two.)
    - A. Reduced cost to run services on AWS
    - B. Improved availability of applications deployed on AWS
    - C. Higher durability of data stored on AWS
    - D. Decreased latency to reach applications deployed on AWS
    - E. Higher security of data stored on AWS

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: BD

    Explanation: <https://aws.amazon.com/global-accelerator/faqs/>

    </details>

37. A user who wants to get help with billing and reactivate a suspended account should submit an account and billing request to:
    - A. the AWS Support forum
    - B. AWS Abuse
    - C. an AWS Solutions Architect
    - D. AWS Support

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: D

    Explanation: <https://aws.amazon.com/premiumsupport/knowledge-center/reactivate-suspended-account/>

    </details>

38. Which AWS Cloud best practice uses the elasticity and agility of cloud computing?
    - A. Provision capacity based on past usage and theoretical peaks
    - B. Dynamically and predictively scale to meet usage demands
    - C. Build the application and infrastructure in a data center that grants physical access
    - D. Break apart the application into loosely coupled components

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: B

    Explanation:
    - In a traditional computing environment, you provision capacity based on an estimate of a theoretical maximum peak.
    - This can result in periods where expensive resources are sitting idle or occasions of insufficient capacity.
    - With cloud computing, you can access as much or as little capacity as you need and dynamically scale to meet actual demand, while only paying for what you use.

    </details>

39. Which method helps to optimize costs of users moving to the AWS Cloud?
    - A. Paying only for what is used
    - B. Purchasing hardware before it is needed
    - C. Manually provisioning cloud resources
    - D. Purchasing for the maximum possible load

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: A

    Explanation: <https://www.cloudmanagementinsider.com/ways-to-optimize-aws-cost/>

    </details>

40. Under the AWS shared responsibility model, which of the following is a customer responsibility?
    - A. Installing security patches for the Xen and KVM hypervisors
    - B. Installing operating system patches for Amazon DynamoDB
    - C. Installing operating system security patches for Amazon EC2 database instances
    - D. Installing operating system security patches for Amazon RDS database instances

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: C

    Explanation: <https://aws.amazon.com/compliance/shared-responsibility-model/>

    </details>

41. The AWS Cost Management tools give users the ability to do which of the following? (Choose two.)
    - A. Terminate all AWS resources automatically if budget thresholds are exceeded.
    - B. Break down AWS costs by day, service, and linked AWS account.
    - C. Create budgets and receive notifications if current of forecasted usage exceeds the budgets.
    - D. Switch automatically to Reserved Instances or Spot Instances, whichever is most cost-effective.
    - E. Move data stored in Amazon S3 to a more cost-effective storage class.

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: BC

    </details>

42. Under the AWS shared responsibility model, the security and patching of the guest operating system is the responsibility of:
    - A. AWS Support
    - B. the customer
    - C. AWS Systems Manager
    - D. AWS Config

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: B

    Explanation: <https://aws.amazon.com/compliance/shared-responsibility-model/>

    </details>

43. Which AWS service makes it easy to create and manage AWS users and groups, and provide them with secure access to AWS resources at no charge?
    - A. AWS Direct Connect
    - B. Amazon Connect
    - C. AWS Identity and Access Management (IAM)
    - D. AWS Firewall Manager

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: C

    Explanation:
    - <https://docs.aws.amazon.com/IAM/latest/UserGuide/console_controlling-access.html>
    - <https://aws.amazon.com/iam/>

    </details>

44. Which AWS service provides on-demand of AWS security and compliance documentation?
    - A. AWS Directory Service
    - B. AWS Artifact
    - C. AWS Trusted Advisor
    - D. Amazon Inspector

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: B

    Explanation: <https://aws.amazon.com/artifact/#:~:text=AWS%20Artifact%20is%20your%20go,reports%20and%20select%20online%20agreements>.

    </details>

45. Which AWS service can be used to turn text into life-like speech?
    - A. Amazon Polly
    - B. Amazon Transcribe
    - C. Amazon Rekognition
    - D. Amazon Lex

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: A

    Explanation: <https://aws.amazon.com/polly/#:~:text=Amazon%20Polly%20is%20a%20service,synthesize%20natural%20sounding%20human%20speech>.

    </details>

46. What is one of the core principles to follow when designing a highly available application in the AWS Cloud?
    - A. Design using a serverless architecture
    - B. Assume that all components within an application can fail
    - C. Design AWS Auto Scaling into every application
    - D. Design all components using open-source code

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: B

    </details>

47. A user needs to generate a report that outlines the status of key security checks in an AWS account. The report must include:
    <br/> (The status of Amazon S3 bucket permissions, Whether multi-factor authentication is enabled for the AWS account root user, If any security groups are configured to allow unrestricted access.) <br/> Where can all this information be found in one location?
    - A. Amazon QuickSight dashboard
    - B. AWS CloudTrail trails
    - C. AWS Trusted Advisor report
    - D. IAM credential report

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: C

    Explanation:
    <https://aws.amazon.com/premiumsupport/technology/trusted-advisor/best-practice-checklist/> #Security

    </details>

48. Which Amazon EC2 pricing model should be used to comply with per-core software license requirements?
    - A. Dedicated Hosts
    - B. On-Demand Instances
    - C. Spot Instances
    - D. Reserved Instances

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: A

    Explanation: <https://aws.amazon.com/ec2/dedicated-hosts/pricing/>

    </details>

49. Which of the AWS global infrastructure is used to cache copies of content for faster delivery to users across the globe?
    - A. AWS Regions
    - B. Availability Zones
    - C. Edge locations
    - D. Data centers

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: C

    Explanation:
    - When your web traffic is geo-dispersed, it's not always feasible and certainly not cost effective to replicate your entire infrastructure across the globe.
    - A CDN provides you the ability to utilize its global network of edge locations to deliver a cached copy of web content such as videos, webpages, images and so on to your customers.
    - To reduce response time, the CDN utilizes the nearest edge location to the customer or originating request location in order to reduce the response time.
    - Throughput is dramatically increased given that the web assets are delivered from cache.
    - For dynamic data, many CDNs can be configured to retrieve data from the origin servers.

    Reference: <https://aws.amazon.com/caching/>

    </details>

50. Using AWS Config to record, audit, and evaluate changes to AWS resources to enable traceability is an example of which AWS Well-Architected Framework pillar?
    - A. Security
    - B. Operational excellence
    - C. Performance efficiency
    - D. Cost optimization

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: A

    Explanation: <https://d1.awsstatic.com/whitepapers/architecture/AWS_Well-Architected_Framework.pdf>

    </details>

