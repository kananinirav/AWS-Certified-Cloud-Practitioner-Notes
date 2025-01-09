---
layout: exam
---

# Practice Exam 19

1. Which AWS offering enables customers to find, buy, and immediately start using software solutions in their AWS environment?
    - A. AWS Config
    - B. AWS OpsWorks
    - C. AWS SDK
    - D. AWS Marketplace

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: D

    Explanation: <https://aws.amazon.com/mp/>

    </details>

2. Which AWS networking service enables a company to create a virtual network within AWS?
    - A. AWS Config
    - B. Amazon Route 53
    - C. AWS Direct Connect
    - D. Amazon Virtual Private Cloud (Amazon VPC.

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: D

    Explanation: <https://aws.amazon.com/vpc/>

    </details>

3. Which of the following is AWS's responsibility under the AWS shared responsibility model?
    - A. Configuring third-party applications
    - B. Maintaining physical hardware
    - C. Securing application access and data
    - D. Managing custom Amazon Machine Images (AMIs)

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: B

    Explanation: <https://aws.amazon.com/compliance/shared-responsibility-model/>

    </details>

4. Which component of AWS global infrastructure does Amazon CloudFront use to ensure low-latency delivery?
    - A. AWS Regions
    - B. AWS edge locations
    - C. AWS Availability Zones
    - D. Amazon Virtual Private Cloud (Amazon VPC.

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: B

    Explanation: <https://aws.amazon.com/cloudfront/>

    </details>

5. How would a system administrator add an additional layer of login security to a user's AWS Management Console?
    - A. Use AWS Cloud Directory
    - B. Audit AWS Identity and Access Management (IAM) roles
    - C. Enable Multi-Factor Authentication
    - D. Enable AWS CloudTrail

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: C

    Explanation: <https://aws.amazon.com/iam/details/mfa/>

    </details>

6. Which service can identify the user that made the API call when an Amazon Elastic Compute Cloud (Amazon EC2) instance is terminated?
    - A. Amazon CloudWatch
    - B. AWS CloudTrail
    - C. AWS X-Ray
    - D. AWS Identity and Access Management (AWS IAM)

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: B

    Explanation: <http://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-user-guide.html>

    </details>

7. Which service would you use to send alerts based on Amazon CloudWatch alarms?
    - A. Amazon Simple Notification Service (Amazon SNS)
    - B. AWS CloudTrail
    - C. AWS Trusted Advisor
    - D. Amazon Route 53

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: A

    Explanation: <http://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/AlarmThatSendsEmail.html>

    </details>

8. Where can a customer find information about prohibited actions on AWS infrastructure?
    - A. AWS Trusted Advisor
    - B. AWS Identity and Access Management (IAM)
    - C. AWS Billing Console
    - D. AWS Acceptable Use Policy

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: D

    Explanation: <https://aws.amazon.com/aup/>

    </details>

9. Which of the following is an example of how moving to the AWS Cloud reduces upfront cost?
    - A. By replacing large variable costs with lower capital investments
    - B. By replacing large capital investments with lower variable costs
    - C. By allowing the provisioning of compute and storage at a fixed level to meet peak demand
    - D. By replacing the repeated scaling of virtual servers with a simpler fixed-scale model

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: B

    Explanation:
    - AWS does not require minimum spend commitments or long-term contracts.
    - You replace large upfront expenses with low variable payments that only apply to what you use.
    - With AWS you are not bound to multi-year agreements or complicated licensing models.

    Reference: <https://aws.amazon.com/economics/>

    </details>

10. When designing a typical three-tier web application, which AWS services and/or features improve availability and reduce the impact failures? (Choose two.)
    - A. AWS Auto Scaling for Amazon EC2 instances
    - B. Amazon VPC subnet ACLs to check the health of a service
    - C. Distributed resources across multiple Availability Zones
    - D. AWS Server Migration Service (AWS SMS) to move Amazon EC2 instances into a different Region
    - E. Distributed resources across multiple AWS points of presence

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: AC

    Explanation: <https://d1.awsstatic.com/whitepapers/AWS_Cloud_Best_Practices.pdf>

    </details>

11. Which cloud design principle aligns with AWS Cloud best practices?
    - A. Create fixed dependencies among application components
    - B. Aggregate services on a single instance
    - C. Deploy applications in a single Availability Zone
    - D. Distribute the compute load across multiple resources

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: D

    Explanation:
    - Use load balancing for offloading encryption termination (TLS) to improve performance and to manage and route traffic effectively.
    - Distribute traffic across multiple resources or services to allow your workload to take advantage of the elasticity that AWS provides.

    Reference: <https://d1.awsstatic.com/whitepapers/architecture/AWS_Well-Architected_Framework.pdf>

    </details>

12. Which of the following are recommended practices for managing IAM users? (Choose two.)
    - A. Require IAM users to change their passwords after a specified period of time
    - B. Prevent IAM users from reusing previous passwords
    - C. Recommend that the same password be used on AWS and other sites
    - D. Require IAM users to store their passwords in raw text
    - E. Disable multi-factor authentication (MFA) for IAM users

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: AB

    Explanation: <https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html>

    </details>

13. A company is migrating from on-premises data centers to the AWS Cloud and is looking for hands-on help with the project. <br/> How can the company get this support? (Choose two.)
    - A. Ask for a quote from the AWS Marketplace team to perform a migration into the company's AWS account.
    - B. Contact AWS Support and open a case for assistance
    - C. Use AWS Professional Services to provide guidance and to set up an AWS Landing Zone in the company's AWS account
    - D. Select a partner from the AWS Partner Network (APN) to assist with the migration
    - E. Use Amazon Connect to create a new request for proposal (RFP) for expert assistance in migrating to the AWS Cloud.

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: CD

    Explanation: <https://aws.amazon.com/solutions/aws-landing-zone/>

    </details>

14. How does the AWS Enterprise Support Concierge team help users?
    - A. Supporting application development
    - B. Providing architecture guidance
    - C. Answering billing and account inquires
    - D. Answering questions regarding technical support cases

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: C

    Explanation: <https://aws.amazon.com/premiumsupport/plans/enterprise/>

    </details>

15. An application designed to span multiple Availability Zones is described as:
    - A. being highly available
    - B. having global reach
    - C. using an economy of scale
    - D. having elasticity

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: A

    </details>

16. A new service using AWS must be highly available. Yet, due to regulatory requirements, all of its Amazon EC2 instances must be located in a single geographic area. <br/> According to best practices, to meet these requirements, the EC2 instances must be placed in at least two:
    - A. AWS Regions
    - B. Availability Zones
    - C. subnets
    - D. placement groups

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: B

    Explanation:
    <https://aws.amazon.com/ec2/faqs/>

    </details>

17. Which AWS tool is used to compare the cost of running an application on-premises to running the application in the AWS Cloud?
    - A. AWS Trusted Advisor
    - B. AWS Simple Monthly Calculator
    - C. AWS Pricing Calculator
    - D. Cost Explorer

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: C

    Explanation: <https://aws.amazon.com/tco-calculator/>

    </details>

18. A company has multiple AWS accounts within AWS Organizations and wants to apply the Amazon EC2 Reserved Instances benefit to a single account only. <br/> Which action should be taken?
    - A. Purchase the Reserved Instances from master payer account and turn off Reserved Instance sharing.
    - B. Enable billing alerts in the AWS Billing and Cost Management console.
    - C. Purchase the Reserved Instances in individual linked accounts and turn off Reserved Instance sharing from the payer level.
    - D. Enable Reserved Instance sharing in the AWS Billing and Cost Management console.

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: A

    Explanation: <https://aws.amazon.com/premiumsupport/knowledge-center/ec2-ri-consolidated-billing/>

    </details>

19. Which situation should be reported to the AWS Abuse team?
    - A. In Availability Zone has a service disruption
    - B. An intrusion attempt is made from an AWS IP address
    - C. A user has trouble accessing an Amazon S3 bucket from an AWS IP address
    - D. A user needs to change payment methods due to a compromise

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: B

    Explanation: <https://aws.amazon.com/premiumsupport/knowledge-center/report-aws-abuse/>

    </details>

20. A company is planning to launch an ecommerce site in a single AWS Region to a worldwide user base. <br/> Which AWS services will allow the company to reach users and provide low latency and high transfer speeds? (Choose two.)
    - A. Application Load Balancer
    - B. AWS Global Accelerator
    - C. AWS Direct Connect
    - D. Amazon CloudFront
    - E. AWS Lambda

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: BD

    Explanation: <https://aws.amazon.com/cloudfront/faqs/>

    </details>

21. Which AWS service or resource is serverless?
    - A. AWS Lambda
    - B. Amazon EC2 instances
    - C. Amazon Lightsail
    - D. Amazon ElastiCache

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: A

    Explanation: <https://blogs.itemis.com/en/serverless-services-on-aws>

    </details>

22. Which of the following are components of Amazon VPC? (Choose two.)
    - A. Objects
    - B. Subnets
    - C. Buckets
    - D. Internet gateways
    - E. Access key

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: BD

    Explanation: <https://subscription.packtpub.com/book/virtualization_and_cloud/9781788293723/3/ch03lvl1sec26/vpc-components>

    </details>

23. AWS Budgets can be used to:
    - A. prevent a given user from creating a resource
    - B. send an alert when the utilization of Reserved Instances drops below a certain percentage
    - C. set resource limits in AWS accounts to prevent overspending
    - D. split an AWS bill across multiple forms of payment

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: C

    Explanation: <https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/budgets-managing-costs.html>

    </details>

24. Which of the following will enhance the security of access to the AWS Management Console? (Choose two.)
    - A. AWS Secrets Manager
    - B. AWS Certificate Manager
    - C. AWS Multi-Factor Authentication (AWS MFA)
    - D. Security groups
    - E. Password policies

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: CE

    Explanation: <https://aws.amazon.com/blogs/security/guidelines-for-protecting-your-aws-account-while-using-programmatic-access/>

    </details>

25. The AWS Trusted Advisor checks include recommendations regarding which of the following? (Choose two.)
    - A. Information on Amazon S3 bucket permissions
    - B. AWS service outages
    - C. Multi-factor authentication enabled on the AWS account root user
    - D. Available software patches
    - E. Number of users in the account

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: AC

    Explanation: <https://aws.amazon.com/premiumsupport/technology/trusted-advisor/best-practice-checklist/>

    </details>

26. Which functions can users perform using AWS KMS?
    - A. Create and manage AWS access keys for the AWS account root user
    - B. Create and manage AWS access keys for an AWS account IAM user
    - C. Create and manage keys for encryption and decryption of data
    - D. Create and manage keys for multi-factor authentication

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: C

    Explanation: <https://docs.aws.amazon.com/kms/latest/developerguide/control-access.html>

    </details>

27. How does AWS Trusted Advisor provide guidance to users of the AWS Cloud? (Choose two.)
    - A. It identifies software vulnerabilities in applications running on AWS
    - B. It provides a list of cost optimization recommendations based on current AWS usage
    - C. It detects potential security vulnerabilities caused by permissions settings on account resources
    - D. It automatically corrects potential security issues caused by permissions settings on account resources
    - E. It provides proactive alerting whenever an Amazon EC2 instance has been compromised

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: BC

    </details>

28. Which of the following are advantages of the AWS Cloud? (Choose two.)
    - A. AWS manages the maintenance of the cloud infrastructure
    - B. AWS manages the security of applications built on AWS
    - C. AWS manages capacity planning for physical servers
    - D. AWS manages the development of applications on AWS
    - E. AWS manages cost planning for virtual servers

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: AC

    Explanation: <https://aws.amazon.com/compliance/data-center/controls/>

    </details>

29. A user deploys an Amazon RDS DB instance in multiple Availability Zones. <br/> This strategy involves which pillar of the AWS Well-Architected Framework?
    - A. Performance efficiency
    - B. Reliability
    - C. Cost optimization
    - D. Security

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: B

    Explanation:
    <https://aws.amazon.com/blogs/apn/the-5-pillars-of-the-aws-well-architected-framework/>

    </details>

30. Which AWS services provide a user with connectivity between the AWS Cloud and on-premises resources? (Choose two.)
    - A. AWS VPN
    - B. Amazon Connect
    - C. Amazon Cognito
    - D. AWS Direct Connect
    - E. AWS Managed Services

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: AD

    Explanation:
    - <https://aws.amazon.com/directconnect/>
    - <https://aws.amazon.com/blogs/networking-and-content-delivery/introducing-aws-client-vpn-to-securely-access-aws-and-on-premises-resources/>

    </details>

31. Which AWS service is used to pay AWS bills, and monitor usage and budget costs?
    - A. AWS Billing and Cost Management
    - B. Consolidated billing
    - C. Amazon CloudWatch
    - D. Amazon QuickSight

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: A

    Explanation: <https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-what-is.html>

    </details>

32. Which element of the AWS global infrastructure consists of one or more discrete data centers, each with redundant power, networking, and connectivity, which are housed in separate facilities?
    - A. AWS Regions
    - B. Availability Zones
    - C. Edge locations
    - D. Amazon CloudFront

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: B

    Explanation:
    <https://docs.aws.amazon.com/whitepapers/latest/aws-overview/global-infrastructure.html>

    </details>

33. Which Amazon VPC feature enables users to capture information about the IP traffic that reaches Amazon EC2 instances?
    - A. Security groups
    - B. Elastic network interfaces
    - C. Network ACLs
    - D. VPC Flow Logs

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: D

    Explanation:
    - VPC Flow Logs is a feature that enables you to capture information about the IP traffic going to and from network interfaces in your VPC.
    - Flow log data can be published to Amazon CloudWatch Logs or Amazon S3. After you've created a flow log, you can retrieve and view its data in the chosen destination.

    Reference: <https://docs.aws.amazon.com/vpc/latest/userguide/flow-logs.html>

    </details>

34. Which AWS service can be used to automatically scale an application up and down without making capacity planning decisions?
    - A. Amazon AutoScaling
    - B. Amazon Redshift
    - C. AWS CloudTrail
    - D. AWS Lambda

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: A

    Explanation: <https://aws.amazon.com/blogs/aws/category/auto-scaling/>

    </details>

35. AWS Enterprise Support users have access to which service or feature that is not available to users with other AWS Support plans?
    - A. AWS Trusted Advisor
    - B. AWS Support case
    - C. Concierge team
    - D. Amazon Connect

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: C

    Explanation: <https://aws.amazon.com/premiumsupport/plans/>

    </details>

36. A company wants to migrate a MySQL database to AWS but does not have the budget for Database Administrators to handle routine tasks including provisioning, patching, and performing backups. <br/> Which AWS service will support this use case?
    - A. Amazon RDS
    - B. Amazon DynamoDB
    - C. Amazon DocumentDB
    - D. Amazon ElastiCache

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: A

    Explanation:
    - Amazon RDS makes it easy to set up, operate, and scale a relational database in the cloud.
    - It provides cost-efficient and resizable capacity while automating time-consuming administration tasks, such as hardware provisioning, database setup, patching, and backups.
    - It frees you to focus on your applications, so you can give them the fast performance, high availability, security, and compatibility that they need.

    Reference: <https://aws.amazon.com/blogs/database/part-1-role-of-the-dba-when-moving-to-amazon-rds-responsibilities/>

    </details>

37. A company wants to expand from one AWS Region into a second AWS Region. <br/> What does the company need to do to start supporting the new Region?
    - A. Contact an AWS Account Manager to sign a new contract
    - B. Move an Availability Zone to the new Region
    - C. Begin deploying resources in the second Region
    - D. Download the AWS Management Console for the new Region

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: C

    Explanation:
    <https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-plan-region.html>

    </details>

38. A user must meet compliance and software licensing requirements that state a workload must be hosted on a physical server. <br/> Which Amazon EC2 instance pricing option will meet these requirements?
    - A. Dedicated Hosts
    - B. Dedicated Instances
    - C. Spot Instances
    - D. Reserved Instances

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: A

    Explanation: <https://aws.amazon.com/ec2/dedicated-hosts/>

    </details>

39. Which AWS service will provide a way to generate encryption keys that can be used to encrypt data? (Choose two.)
    - A. Amazon Macie
    - B. AWS Certificate Manager
    - C. AWS Key Management Service (AWS KMS)
    - D. AWS Secrets Manager
    - E. AWS CloudHSM

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: CE

    Explanation:
    - <https://docs.aws.amazon.com/crypto/latest/userguide/awscryp-service-hsm.html>
    - <https://docs.aws.amazon.com/kms/latest/developerguide/overview.html>

    </details>

40. A company is planning to migrate from on-premises to the AWS Cloud. <br/> Which AWS tool or service provides detailed reports on estimated cost savings after migration?
    - A. AWS Total Cost of Ownership (TCO) Calculator
    - B. Cost Explorer
    - C. AWS Budgets
    - D. AWS Migration Hub

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: A

    Explanation:
    <https://docs.aws.amazon.com/migrationhub/latest/ug/hub-api.pdf> (26)

    </details>

41. What can assist in evaluating an application for migration to the cloud? (Choose two.)
    - A. AWS Trusted Advisor
    - B. AWS Professional Services
    - C. AWS Systems Manager
    - D. AWS Partner Network (APN)
    - E. AWS Secrets Manager

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: BD

    </details>

42. Which AWS service helps users meet contractual and regulatory compliance requirements for data security by using dedicated hardware appliances within the AWS Cloud?
    - A. AWS Secrets Manager
    - B. AWS CloudHSM
    - C. AWS Key Management Service (AWS KMS)
    - D. AWS Directory Service

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: B

    Explanation:
    - The AWS CloudHSM service helps you meet corporate, contractual, and regulatory compliance requirements for data security by using dedicated Hardware Security Module (HSM) instances within the AWS cloud.
    - AWS and AWS Marketplace partners offer a variety of solutions for protecting sensitive data within the AWS platform, but for some applications and data subject to contractual or regulatory mandates for managing cryptographic keys, additional protection may be necessary.
    - CloudHSM complements existing data protection solutions and allows you to protect your encryption keys within HSMs that are designed and validated to government standards for secure key management.
    - CloudHSM allows you to securely generate, store, and manage cryptographic keys used for data encryption in a way that keys are accessible only by you.

    Reference: <https://aws.amazon.com/cloudhsm/faqs/>

    </details>

43. Under the AWS shared responsibility model, the customer manages which of the following? (Choose two.)
    - A. Decommissioning of physical storage devices
    - B. Security group and ACL configuration
    - C. Patch management of an Amazon RDS instance operating system
    - D. Controlling physical access to data centers
    - E. Patch management of an Amazon EC2 instance operating system

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: BE

    Explanation: <https://www.whizlabs.com/blog/aws-security-shared-responsibility/>

    </details>

44. Which AWS service is suitable for an event-driven workload?
    - A. Amazon EC2
    - B. AWS Elastic Beanstalk
    - C. AWS Lambda
    - D. Amazon Lumberyard

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: C

    Explanation:
    - An easy-to-use service for deploying and scaling web applications and web services developed in a number of programming languages.
    - You can configure event notifications for your Elastic Beanstalk environment so that notable events can be automatically published to an SNS topic, then pushed to topic subscribers.
    - As an example, you may use this event-driven architecture to coordinate your continuous integration pipeline (such as Jenkins CI).
    - That way, whenever an environment is created, Elastic Beanstalk publishes this event to an SNS topic, which triggers a subscribing Lambda function, which then kicks off a CI job against your newly created Elastic Beanstalk environment.

    Reference: <https://aws.amazon.com/blogs/compute/event-driven-computing-with-amazon-sns-compute-storage-database-and-networking-services/>

    </details>

45. What is a value proposition of the AWS Cloud?
    - A. AWS is responsible for security in the AWS Cloud
    - B. No long-term contract is required
    - C. Provision new servers in days
    - D. AWS manages user applications in the AWS Cloud

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: B

    Explanation: <https://d1.awsstatic.com/whitepapers/aws-whitepaper-business-value-of-aws.pdf>

    </details>

46. What is a characteristic of Amazon S3 cross-region replication?
    - A. Both source and destination S3 buckets must have versioning disabled
    - B. The source and destination S3 buckets cannot be in different AWS Regions
    - C. S3 buckets configured for cross-region replication can be owned by a single AWS account or by different accounts
    - D. The source S3 bucket owner must have the source and destination AWS Regions disabled for their account

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: C

    Explanation: <https://docs.aws.amazon.com/AmazonS3/latest/dev/replication.html>

    </details>

47. What is a user responsible for when running an application in the AWS Cloud?   - A. Managing physical hardware
    - B. Updating the underlying hypervisor
    - C. Providing a list of users approved for data center access
    - D. Managing application software updates

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: D

    Explanation: <https://aws.amazon.com/compliance/shared-responsibility-model/>

    </details>

48. A company that does business online needs to quickly deliver new functionality in an iterative manner, minimizing the time to market. <br/> Which AWS Cloud feature can provide this?
    - A. Elasticity
    - B. High availability
    - C. Agility
    - D. Reliability

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: C

    Explanation: <https://aws.amazon.com/devops/partner-solutions/>

    </details>

49. Which features or services can be used to monitor costs and expenses for an AWS account? (Choose two.)
    - A. AWS Cost and Usage report
    - B. AWS product pages
    - C. AWS Simple Monthly Calculator
    - D. Billing alerts and Amazon CloudWatch alarms
    - E. AWS Price List API

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: AD

    Explanation: <https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/monitor_estimated_charges_with_cloudwatch.html>

    </details>

50. Amazon Route 53 enables users to:
    - A. encrypt data in transit
    - B. register DNS domain names
    - C. generate and manage SSL certificates
    - D. establish a dedicated network connection to AWS

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: B

    Explanation: <https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/Welcome.html>

    </details>

