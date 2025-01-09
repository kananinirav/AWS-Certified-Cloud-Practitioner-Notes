---
layout: exam
---

# Practice Exam 21

1. A user needs to quickly deploy a non-relational database on AWS. The user does not want to manage the underlying hardware or the database software. <br/> Which AWS service can be used to accomplish this?
    - A. Amazon RDS
    - B. Amazon DynamoDB
    - C. Amazon Aurora
    - D. Amazon Redshift

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: B

    Explanation: <https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/SQLtoNoSQL.html>

    </details>

2. A Cloud Practitioner is developing a disaster recovery plan and intends to replicate data between multiple geographic areas.<br/> Which of the following meets these requirements?
    - A. AWS Accounts
    - B. AWS Regions
    - C. Availability Zones
    - D. Edge locations

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: B

    Explanation: <https://www.botmetric.com/blog/having-a-disaster-recovery-plan-is-pivotal-the-dos-and-donts-on-aws-cloud/>

    </details>

3. Which features and benefits does the AWS Organizations service provide? (Choose two.)
    - A. Establishing real-time communications between members of an internal team
    - B. Facilitating the use of NoSQL databases
    - C. Providing automated security checks
    - D. Implementing consolidated billing
    - E. Enforcing the governance of AWS accounts

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: DE

    Explanation: <https://aws.amazon.com/organizations/>

    </details>

4. Which AWS service is used to automate configuration management using Chef and Puppet?
    - A. AWS Config
    - B. AWS OpsWorks
    - C. AWS CloudFormation
    - D. AWS Systems Manager

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: B

    Explanation: <https://aws.amazon.com/opsworks/>

    </details>

5. Which tool is best suited for combining the billing of AWS accounts that were previously independent from one another?
    - A. Detailed billing report
    - B. Consolidated billing
    - C. AWS Cost and Usage report
    - D. Cost allocation report

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: B

    Explanation: <https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/consolidated-billing.html>

    </details>

6. The AWS Total Cost of Ownership (TCO) Calculator is used to:
    - A. receive reports that break down AWS Cloud compute costs by duration, resource, or tags
    - B. estimate savings when comparing the AWS Cloud to an on-premises environment
    - C. estimate a monthly bill for the AWS Cloud resources that will be used
    - D. enable billing alerts to monitor actual AWS costs compared to estimated costs

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: B

    Explanation: <https://aws.amazon.com/tco-calculator/>

    </details>

7. Which AWS services can be used to provide network connectivity between an on-premises network and a VPC? (Choose two.)
    - A. Amazon Route 53
    - B. AWS Direct Connect
    - C. AWS Data Pipeline
    - D. AWS VPN
    - E. Amazon Connect

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: BD

    Explanation: <https://aws.amazon.com/directconnect/faqs/>

    </details>

8. Under the AWS shared responsibility model, which of the following are customer responsibilities? (Choose two.)
    - A. Setting up server-side encryption on an Amazon S3 bucket
    - B. Amazon RDS instance patching
    - C. Network and firewall configurations
    - D. Physical security of data center facilities
    - E. Compute capacity availability

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: AC

    Explanation: <https://aws.amazon.com/compliance/shared-responsibility-model/>

    </details>

9. What is the MINIMUM AWS Support plan level that will provide users with access to the AWS Support API?
    - A. Developer
    - B. Enterprise
    - C. Business
    - D. Basic

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: C

    Explanation: <https://aws.amazon.com/premiumsupport/plans/>

    </details>

10. A company has deployed several relational databases on Amazon EC2 instances. Every month, the database software vendor releases new security patches that need to be applied to the databases. <br/> What is the MOST efficient way to apply the security patches?
    - A. Connect to each database instance on a monthly basis, and download and apply the necessary security patches from the vendor.
    - B. Enable automatic patching for the instances using the Amazon RDS console.
    - C. In AWS Config, configure a rule for the instances and the required patch level.
    - D. Use AWS Systems Manager to automate database patching according to a schedule.

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: D

    Explanation: <https://aws.amazon.com/rds/faqs/>

    </details>

11. A company wants to use Amazon Elastic Compute Cloud (Amazon EC2) to deploy a global commercial application. The deployment solution should be built with the highest redundancy and fault tolerance. <br/> Based on this situation, the Amazon EC2 instances should be deployed:
    - A. in a single Availability Zone in one AWS Region
    - B. with multiple Elastic Network Interfaces belonging to different subnets
    - C. across multiple Availability Zones in one AWS Region
    - D. across multiple Availability Zones in two AWS Regions

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: C

    Explanation: <https://jayendrapatil.com/aws-high-availability-fault-tolerance-architecture-certification/>

    </details>

12. A company has an application with users in both Australia and Brazil. All the company infrastructure is currently provisioned in the Asia Pacific (Sydney) Region in Australia, and Brazilian users are experiencing high latency. <br/> What should the company do to reduce latency?
    - A. Implement AWS Direct Connect for users in Brazil
    - B. Provision resources in the South America (São Paulo) Region in Brazil.
    - C. Use AWS Transit Gateway to quickly route users from Brazil to the application
    - D. Launch additional Amazon EC2 instances in Sydney to handle the demand

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: B

    Explanation: <https://aws.amazon.com/transit-gateway/>

    </details>

13. An Amazon EC2 instance runs only when needed yet must remain active for the duration of the process. <br/> What is the most appropriate purchasing option?
    - A. Dedicated Instances
    - B. Spot Instances
    - C. On-Demand Instances
    - D. Reserved Instances

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: C

    </details>

14. Which AWS dashboard displays relevant and timely information to help users manage events in progress, and provides proactive notifications to help plan for scheduled activities?
    - A. AWS Service Health Dashboard
    - B. AWS Personal Health Dashboard
    - C. AWS Trusted Advisor dashboard
    - D. Amazon CloudWatch dashboard

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: B

    Explanation: <https://aws.amazon.com/premiumsupport/technology/personal-health-dashboard/>

    </details>

15. Which AWS hybrid storage service enables a user's on-premises applications to seamlessly use AWS Cloud storage?
    - A. AWS Backup
    - B. Amazon Connect
    - C. AWS Direct Connect
    - D. AWS Storage Gateway

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: D

    Explanation: <https://aws.amazon.com/storagegateway/?whats-new-cards.sort-by=item.additionalFields.postDateTime&whats-new-cards.sort-order=desc>

    </details>

16. Which of the following acts as a virtual firewall at the Amazon EC2 instance level to control traffic for one or more instances?
    - A. Access keys
    - B. Virtual private gateways
    - C. Security groups
    - D. Access Control Lists (ACL)

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: C

    Explanation: <https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-security-groups.html>

    </details>

17. What is the most efficient way to establish network connectivity from on-premises to multiple VPCs in different AWS Regions?
    - A. Use AWS Direct Connect
    - B. Use AWS VPN
    - C. Use AWS Client VPN
    - D. Use an AWS Transit Gateway

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: D

    Explanation: <https://d1.awsstatic.com/whitepapers/building-a-scalable-and-secure-multi-vpc-aws-network-infrastructure.pdf>

    </details>

18. Which AWS Support plan provides access to architectural and operational reviews, as well as 24/7 access to Senior Cloud Support Engineers through email, online chat, and phone?
    - A. Basic
    - B. Business
    - C. Developer
    - D. Enterprise

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: D

    Explanation: <https://aws.amazon.com/premiumsupport/plans/enterprise/>

    </details>

19. Which AWS service or feature helps restrict the AWS services, resources, and individual API actions the users and roles in each member account can access?
    - A. Amazon Cognito
    - B. AWS Organizations
    - C. AWS Shield
    - D. AWS Firewall Manager

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: B

    Explanation: <https://docs.aws.amazon.com/organizations/latest/userguide/orgs_introduction.html>

    </details>

20. What is the best resource for a user to find compliance-related information and reports about AWS?
    - A. AWS Artifact
    - B. AWS Marketplace
    - C. Amazon Inspector
    - D. AWS Support

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: A

    Explanation: <https://aws.amazon.com/compliance/faq/>

    </details>

21. Which Amazon S3 storage class is optimized to provide access to data with lower resiliency requirements, but rapid access when needed such as duplicate backups?
    - A. Amazon S3 Standard
    - B. Amazon S3 Glacier Deep Archive
    - C. Amazon S3 One Zone-Infrequent Access
    - D. Amazon S3 Glacier

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: C

    Explanation: <https://aws.amazon.com/s3/storage-classes/>

    </details>

22. What is an Availability Zone in AWS?
    - A. One or more physical data centers
    - B. A completely isolated geographic location
    - C. One or more edge locations based around the world
    - D. A data center location with a single source of power and networking

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: A

    Explanation: <https://aws.amazon.com/about-aws/global-infrastructure/regions_az/>

    </details>

23. Which AWS services can be used as infrastructure automation tools? (Choose two.)
    - A. AWS CloudFormation
    - B. Amazon CloudFront
    - C. AWS Batch
    - D. AWS OpsWorks
    - E. Amazon QuickSight

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: AD

    Explanation: <https://blog.newrelic.com/engineering/best-cloud-infrastructure-automation-tools/>

    </details>

24. Which AWS service enables users to create copies of resources across AWS Regions?
    - A. Amazon ElastiCache
    - B. AWS CloudFormation
    - C. AWS CloudTrail
    - D. AWS Systems Manager

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: B

    Explanation: <https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-concepts.html>

    </details>

25. A user would like to encrypt data that is received, stored, and managed by AWS CloudTrail. <br/> Which AWS service will provide this capability?
    - A. AWS Secrets Manager
    - B. AWS Systems Manager
    - C. AWS Key Management Service (AWS KMS)
    - D. AWS Certificate Manager

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: C

    Explanation: <https://docs.aws.amazon.com/awscloudtrail/latest/userguide/data-protection.html>

    </details>

26. Which AWS Cloud benefit eliminates the need for users to try estimating future infrastructure usage?
    - A. Easy and fast deployment of applications in multiple Regions around the world
    - B. Security of the AWS Cloud
    - C. Elasticity of the AWS Cloud
    - D. Lower variable costs due to massive economies of scale

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: C

    </details>

27. What credential components are required to gain programmatic access to an AWS account? (Choose two.)
    - A. An access key ID
    - B. A primary key
    - C. A secret access key
    - D. A user ID
    - E. A secondary key

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: AC

    Explanation: <https://docs.aws.amazon.com/general/latest/gr/aws-sec-cred-types.html>

    </details>

28. Which of the following are AWS compute services? (Select two.)
    - A. Amazon Lightsail
    - B. AWS Systems Manager
    - C. AWS CloudFormation
    - D. AWS Batch
    - E. Amazon Inspector

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: AD

    Explanation: <https://docs.aws.amazon.com/whitepapers/latest/aws-overview/compute-services.html>

    </details>

29. How can a company separate costs for network traffic, Amazon EC2, Amazon S3, and other AWS services by department?
    - A. Add department-specific tags to each resource
    - B. Create a separate VPC for each department
    - C. Create a separate AWS account for each department
    - D. Use AWS Organizations

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: C

    </details>

30. What is a benefit of consolidated billing for AWS accounts?
    - A. Access to AWS Personal Health Dashboard
    - B. Combined usage volume discounts
    - C. Improved account security
    - D. Centralized AWS IAM

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: B

    Explanation: <https://jayendrapatil.com/aws-consolidated-billing/>

    </details>

31. Which AWS service will allow a user to set custom cost and usage limits, and will alert when the thresholds are exceeded?
    - A. AWS Organizations
    - B. AWS Budgets
    - C. Cost Explorer
    - D. AWS Trusted Advisor

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: B

    Explanation: <https://aws.amazon.com/getting-started/hands-on/control-your-costs-free-tier-budgets/>

    </details>

32. Which AWS service provides the ability to detect inadvertent data leaks of personally identifiable information (PII) and user credential data?
    - A. Amazon GuardDuty
    - B. Amazon Inspector
    - C. Amazon Macie
    - D. AWS Shield

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: C

    Explanation: <https://aws.amazon.com/macie/>

    </details>

33. Which tool can be used to monitor AWS service limits?
    - A. AWS Total Cost of Ownership (TCO) Calculator
    - B. AWS Trusted Advisor
    - C. AWS Personal Health Dashboard
    - D. AWS Cost and Usage report

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: B

    Explanation: <https://aws.amazon.com/blogs/mt/monitoring-service-limits-with-trusted-advisor-and-amazon-cloudwatch/>

    </details>

34. A company has distributed its workload on both the AWS Cloud and some on-premises servers. <br/> What type of architecture is this?
    - A. Virtual private network
    - B. Virtual private cloud
    - C. Hybrid cloud
    - D. Private cloud

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: C

    Explanation: <https://aws.amazon.com/hybrid/>

    </details>

35. Which of the following describes a security best practice that can be implemented using AWS IAM?
    - A. Disable AWS Management Console access for all users
    - B. Generate secret keys for every IAM user
    - C. Grant permissions to users who are required to perform a given task only
    - D. Store AWS credentials within Amazon EC2 instances

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: C

    Explanation: <https://cloudcheckr.com/cloud-security/top-5-iam-best-practices/>

    </details>

36. What can be used to automate and manage secure, well-architected, multi-account AWS environments?
    - A. AWS shared responsibility model
    - B. AWS Control Tower
    - C. AWS Security Hub
    - D. AWS Well-Architected Tool

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: B

    Explanation:
    - Control Tower automates the process of setting up a new baseline multi-account AWS environment that is secure, well-architected, and ready to use.
    - Control Tower incorporates the knowledge that AWS Professional Service has gained over the course of thousands of successful customer engagements.

    Reference: <https://aws.amazon.com/blogs/aws/aws-control-tower-set-up-govern-a-multi-account-aws-environment/>

    </details>

37. Which AWS service or feature allows a user to easily scale connectivity among thousands of VPCs?
    - A. VPC peering
    - B. AWS Transit Gateway
    - C. AWS Direct Connect
    - D. AWS Global Accelerator

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: B

    Explanation: <https://aws.amazon.com/blogs/training-and-certification/explore-the-aws-transit-gateway-networking-and-scaling-digital-course/>

    </details>

38. A company needs protection from expanded distributed denial of service (DDoS) attacks on its website and assistance from AWS experts during such events. <br/> Which AWS managed service will meet these requirements?
    - A. AWS Shield Advanced
    - B. AWS Firewall Manager
    - C. AWS WAF
    - D. Amazon GuardDuty

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: A

    Explanation: <https://docs.aws.amazon.com/waf/latest/developerguide/ddos-overview.html>

    </details>

39. A company's application has flexible start and end times. <br/> Which Amazon EC2 pricing model will be the MOST cost-effective?
    - A. On-Demand Instances
    - B. Spot Instances
    - C. Reserved Instances
    - D. Dedicated Hosts

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: B

    Explanation: <https://aws.amazon.com/ec2/pricing/>

    </details>

40. Under the AWS shared responsibility model, what are the customer's responsibilities? (Choose two.)
    - A. Physical and environmental security
    - B. Physical network devices including firewalls
    - C. Storage device decommissioning
    - D. Security of data in transit
    - E. Data integrity authentication

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: DE

    </details>

41. A cloud practitioner has a data analysis workload that is infrequently executed and can be interrupted without harm. To optimize for cost, which Amazon EC2 purchasing option should be used?
    - A. On-Demand Instances
    - B. Reserved Instances
    - C. Spot Instances
    - D. Dedicated Hosts

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: C

    Explanation: <https://aws.amazon.com/ec2/pricing/>

    </details>

42. Which AWS container service will help a user install, operate, and scale the cluster management infrastructure?
    - A. Amazon Elastic Container Registry (Amazon ECR)
    - B. AWS Elastic Beanstalk
    - C. Amazon Elastic Container Service (Amazon ECS)
    - D. Amazon Elastic Block Store (Amazon EBS)

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: C

    </details>

43. Which of the following allows an application running on an Amazon EC2 instance to securely write data to an Amazon S3 bucket without using long term credentials?
    - A. Amazon Cognito
    - B. AWS Shield
    - C. AWS IAM role
    - D. AWS IAM user access key

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: C

    </details>

44. A company with a Developer-level AWS Support plan provisioned an Amazon RDS database and cannot connect to it. <br/> Who should the developer contact for this level of support?
    - A. AWS Support using a support case
    - B. AWS Professional Services
    - C. AWS technical account manager
    - D. AWS consulting partners

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: A

    </details>

45. What is the purpose of having an internet gateway within a VPC?
    - A. To create a VPN connection to the VPC
    - B. To allow communication between the VPC and the Internet
    - C. To impose bandwidth constraints on internet traffic
    - D. To load balance traffic from the Internet across Amazon EC2 instances

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: B

    </details>

46. A company must ensure that its endpoint for a database instance remains the same after a single Availability Zone service interruption. The application needs to resume database operations without the need for manual administrative intervention. <br/> How can these requirements be met?
    - A. Use multiple Amazon Route 53 routes to the standby database instance endpoint hosted on AWS Storage Gateway.
    - B. Configure Amazon RDS Multi-Availability Zone deployments with automatic failover to the standby.
    - C. Add multiple Application Load Balancers and deploy the database instance with AWS Elastic Beanstalk.
    - D. Deploy a single Network Load Balancer to distribute incoming traffic across multiple Amazon CloudFront origins.

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: B

    </details>

47. Which AWS managed service can be used to distribute traffic between one or more Amazon EC2 instances?
    - A. NAT gateway
    - B. Elastic Load Balancing
    - C. Amazon Athena
    - D. AWS PrivateLink

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: B

    </details>

48. AWS Trusted Advisor provides recommendations on which of the following? (Choose two.)
    - A. Cost optimization
    - B. Auditing
    - C. Serverless architecture
    - D. Performance
    - E. Scalability

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: AD

    </details>

49. Which of the following tasks can only be performed after signing in with AWS account root user credentials? (Choose two.)
    - A. Closing an AWS account
    - B. Creating a new IAM policy
    - C. Changing AWS Support plans
    - D. Attaching a role to an Amazon EC2 instance
    - E. Generating access keys for IAM users

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: AC

    </details>

50. Fault tolerance refers to:
    - A. the ability of an application to accommodate growth without changing design
    - B. how well and how quickly an application's environment can have lost data restored
    - C. how secure your application is
    - D. the built-in redundancy of an application's components

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: D

    </details>

