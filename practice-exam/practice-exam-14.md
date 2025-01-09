---
layout: exam
---

# Practice Exam 14

1. Which storage service can be used as a low-cost option for hosting static websites?
    - A. Amazon Glacier
    - B. Amazon DynamoDB
    - C. Amazon Elastic File System (Amazon EFS)
    - D. Amazon Simple Storage Service (Amazon S3)

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: D

    Explanation: <https://aws.amazon.com/getting-started/projects/host-static-website/>

    </details>

2. Which Amazon EC2 instance pricing model can provide discounts of up to 90%?
    - A. Reserved Instances
    - B. On-Demand
    - C. Dedicated Hosts
    - D. Spot Instances

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: D

    Explanation: <https://aws.amazon.com/ec2/spot/>

    </details>

3. What is the AWS customer responsible for according to the AWS shared responsibility model?
    - A. Physical access controls
    - B. Data encryption
    - C. Secure disposal of storage devices
    - D. Environmental risk management

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: B

    </details>

4. Which of the following AWS Cloud services can be used to run a customer-managed relational database?
    - A. Amazon EC2
    - B. Amazon Route 53
    - C. Amazon ElastiCache
    - D. Amazon DynamoDB

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: A

    </details>

5. A company is looking for a scalable data warehouse solution. <br/> Which of the following AWS solutions would meet the company's needs?
    - A. Amazon Simple Storage Service (Amazon S3)
    - B. Amazon DynamoDB
    - C. Amazon Kinesis
    - D. Amazon Redshift

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: D

    Explanation: <https://aws.amazon.com/redshift/>

    </details>

6. Which statement best describes Elastic Load Balancing?
    - A. It translates a domain name into an IP address using DNS.
    - B. It distributes incoming application traffic across one or more Amazon EC2 instances.
    - C. It collects metrics on connected Amazon EC2 instances.
    - D. It automatically adjusts the number of Amazon EC2 instances to support incoming traffic.

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: B

    Explanation: <https://aws.amazon.com/elasticloadbalancing/>

    </details>

7. Which of the following are valid ways for a customer to interact with AWS services? (Select TWO.)
    - A. Command line interface
    - B. On-premises
    - C. Software Development Kits
    - D. Software-as-a-service
    - E. Hybrid

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: AC

    </details>

8. The AWS Cloud's multiple Regions are an example of:
    - A. agility.
    - B. global infrastructure.
    - C. elasticity.
    - D. pay-as-you-go pricing.

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: B

    </details>

9. Which of the following AWS services can be used to serve large amounts of online video content with the lowest possible latency? (Select TWO.)
    - A. AWS Storage Gateway
    - B. Amazon S3
    - C. Amazon Elastic File System (EFS)
    - D. Amazon Glacier
    - E. Amazon CloudFront

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: BE

    Explanation:
    - <https://aws.amazon.com/getting-started/tutorials/deliver-content-faster/>
    - <https://aws.amazon.com/cloudfront/>

    </details>

10. Web servers running on Amazon EC2 access a legacy application running in a corporate data center. <br/> What term would describe this model?
    - A. Cloud-native
    - B. Partner network
    - C. Hybrid architecture
    - D. Infrastructure as a service

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: C

    Explanation: <https://aws.amazon.com/enterprise/hybrid/>

    </details>

11. What is the benefit of using AWS managed services, such as Amazon ElastiCache and Amazon Relational Database Service (Amazon RDS)?
    - A. They require the customer to monitor and replace failing instances.
    - B. They have better performance than customer-managed services.
    - C. They simplify patching and updating underlying OSs.
    - D. They do not require the customer to optimize instance type or size selections.

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: C

    Explanation:
    - AWS Managed Services takes care of all of your patching and backup activities to help keep your resources current and secure. When updates or patches are released by OS vendors, AWS Managed Services applies them in a timely and consistent manner to minimize the impact on your business
    - Critical security patches are applied immediately, while others are applied based on the patch schedule you request. Backups of Stacks are automated using Amazon Elastic Block Store (EBS) and RDS snapshots, and can be restored in the event of a failure or outage, ensuring business continuity

    </details>

12. Which service provides a virtually unlimited amount of online highly durable object storage?
    - A. Amazon Redshift
    - B. Amazon Elastic File System (Amazon EFS)
    - C. Amazon Elastic Container Service (Amazon ECS)
    - D. Amazon S3

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: D

    Explanation: <https://aws.amazon.com/what-is-cloud-object-storage/>

    </details>

13. Which of the following Identity and Access Management (IAM) entities is associated with an access key ID and secret access key when using AWS Command Line Interface (AWS CLI)?
    - A. IAM group
    - B. IAM user
    - C. IAM role
    - D. IAM policy

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: B

    Explanation:
    - Access keys are long-term credentials for an IAM user or the AWS account root user.
    - You can use access keys to sign programmatic requests to the AWS CLI or API (directly or using the AWS SDK).
    - For more information, see Signing AWS API Requests in the Amazon Web Services General Reference.

    </details>

14. Which of the following security-related services does AWS offer? (Select TWO.)
    - A. Multi-factor authentication physical tokens
    - B. AWS Trusted Advisor security checks
    - C. Data encryption
    - D. Automated penetration testing
    - E. Amazon S3 copyrighted content detection

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: BC

    Explanation:
    - Penetration testing is not correct, because it can be done by customers on their own resources.

    </details>

15. Which AWS managed service is used to host databases?
    - A. AWS Batch
    - B. AWS Artifact
    - C. AWS Data Pipeline
    - D. Amazon RDS

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: D

    Explanation:
    - Amazon Relational Database Service (Amazon RDS) makes it easy to set up, operate, and scale a relational database in the cloud.
    - It provides cost-efficient and resizable capacity while automating time-consuming administration tasks such as hardware provisioning, database setup, patching and backups.
    - It frees you to focus on your applications so you can give them the fast performance, high availability, security and compatibility they need.

    Reference: <https://aws.amazon.com/rds/?c=db&sec=srv>

    </details>

16. Which AWS service provides a simple and scalable shared file storage solution for use with Linux-based AWS and on-premises servers?
    - A. Amazon S3
    - B. Amazon Glacier
    - C. Amazon EBS
    - D. Amazon EFS

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: D

    Explanation:
    - Amazon Elastic File System (Amazon EFS) provides a simple, scalable, fully managed elastic NFS file system for use with AWS Cloud services and on-premises resources.
    - It is built to scale on demand to petabytes without disrupting applications, growing and shrinking automatically as you add and remove files, eliminating the need to provision and manage capacity to accommodate growth.
    - Amazon EFS is designed to provide the throughput, IOPS, and low latency needed for Linux workloads.
    - Throughput and IOPS scale as a file system grows and can burst to higher throughput levels for short periods of time to support the unpredictable performance needs of file workloads.
    - For the most demanding workloads, Amazon EFS can support performance over 10 GB/sec and up to 500,000 IOPS.

    </details>

17. When architecting cloud applications, which of the following are a key design principle?
    - A. Use the largest instance possible
    - B. Provision capacity for peak load
    - C. Use the Scrum development process
    - D. Implement elasticity

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: D

    Explanation:
    - "Provisioning for peaks" is a characteristic of a traditional computing environment, per the AWS Best Practices: "you provision capacity based on an estimate of a theoretical maximum peak."
    - <https://d1.awsstatic.com/whitepapers/AWS_Cloud_Best_Practices.pdf>

    </details>

18. Which AWS service should be used for long-term, low-cost storage of data backups?
    - A. Amazon RDS
    - B. Amazon Glacier
    - C. AWS Snowball
    - D. AWS EBS

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: B

    Explanation:
    - Amazon S3 Glacier is a secure, durable, and low-cost storage class of S3 for data archiving and long-term backup. Customers can store large or small amounts of data for as little as $0.004 per gigabyte per month.
    - The S3 Glacier storage class is ideal for archives where data is regularly retrieved and some of the data may be needed in minutes.
    - Amazon RDS is a relational database service that hosts databases. It helps you create and manage databases.
    - Amazon Snowball is a petabyte-scale data transfer service that provides cost efficient data transfer to AWS from tamper proof physical devices. Similarly, Elastic block storage offers persistent block storage volumes for EC2 instances.

    Reference: <https://aws.amazon.com/backup-restore/services/>

    </details>

19. Which task is AWS responsible for in the shared responsibility model for security and compliance?
    - A. Granting access to individuals and services
    - B. Encrypting data in transit
    - C. Updating Amazon EC2 host firmware
    - D. Updating operating systems

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: B

    Explanation:
    - AWS Compliance enables customers to establish and operate in an AWS security control environment The shared responsibility model is part of AWS Compliance
    - The Security of the cloud is managed by Amazon AWS provider
    - The Security in the cloud is responsibility of the customer
    - The customer is responsible for their information and data, their secure transmission, integrity, and encryption Also, the customer is responsible for managing, support, patching and control of the guest operating system and AWS services provided like EC2
    - AWS customers retain control and ownership of their data
    - The AWS network provides significant protection against traditional network security issues and the customer can implement further protection

    Reference: <https://www.whizlabs.com/blog/aws-security-shared-responsibility/>

    </details>

20. Where should a company go to search software listings from independent software vendors to find, test, buy and deploy software that runs on AWS?
    - A. AWS Marketplace
    - B. Amazon Lumberyard
    - C. AWS Artifact
    - D. Amazon CloudSearch

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: A

    Explanation:
    - AWS Marketplace is a digital catalog with thousands of software listings from independent software vendors that make it easy to find, test, buy, and deploy software that runs on AWS.

    Reference: <https://aws.amazon.com>

    </details>

21. Which of the following is a benefit of using the AWS Cloud?
    - A. Permissive security removes the administrative burden.
    - B. Ability to focus on revenue-generating activities.
    - C. Control over cloud network hardware.
    - D. Choice of specific cloud hardware vendors.

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: B

    Explanation:
    - Developer and IT staff productivity accounted for nearly 30% of overall financial benefits.
    - The remaining benefits were driven by the flexibility and agility of Amazon cloud infrastructure services, which make it easier to trial new business models, support revenue-generating applications, and provide more reliable services to end users.

    Reference: <https://media.amazonwebservices.com/IDC_Business_Value_of_AWS_Accelerates_Over_time.pdf>

    </details>

22. When performing a cost analysis that supports physical isolation of a customer workload, which compute hosting model should be accounted for in the Total Cost of Ownership (TCO)?
    - A. Dedicated Hosts
    - B. Reserved Instances
    - C. On-Demand Instances
    - D. No Upfront Reserved Instances

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: A

    Explanation:
    - Use Dedicated Hosts to launch Amazon EC2 instances on physical servers that are dedicated for your use.
    - Dedicated Hosts give you additional visibility and control over how instances are placed on a physical server, and you can reliably use the same physical server over time.
    - As a result, Dedicated Hosts enable you to use your existing server-bound software licenses like Windows Server and address corporate compliance and regulatory requirements.

    </details>

23. Which AWS service provides the ability to manage infrastructure as code?
    - A. AWS CodePipeline
    - B. AWS CodeDeploy
    - C. AWS Direct Connect
    - D. AWS CloudFormation

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: D

    Explanation:
    - AWS CloudFormation provides a common language for you to describe and provision all the infrastructure resources in your cloud environment.
    - CloudFormation allows you to use a simple text file to model and provision, in an automated and secure manner, all the resources needed for your applications across all regions and accounts.
    - This file serves as the single source of truth for your cloud environment.

    Reference: <https://aws.amazon.com/cloudformation/>

    </details>

24. If a customer needs to audit the change management of AWS resources, which of the following AWS services should the customer use?
    - A. AWS Config
    - B. AWS Trusted Advisor
    - C. Amazon CloudWatch
    - D. Amazon Inspector

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: A

    Explanation:
    - AWS Config is a service that enables you to assess, audit, and evaluate the configurations of your AWS resources.
    - Config continuously monitors and records your AWS resource configurations and allows you to automate the evaluation of recorded configurations against desired configurations.
    - With Config, you can review changes in configurations and relationships between AWS resources, dive into detailed resource configuration histories, and determine your overall compliance against the configurations specified in your internal guidelines.
    - This enables you to simplify compliance auditing, security analysis, change management, and operational troubleshooting.

    Reference: <https://aws.amazon.com/config/>

    </details>

25. What is Amazon CloudWatch?
    - A. A code repository with customizable build and team commit features.
    - B. A metrics repository with customizable notification thresholds and channels.
    - C. A security configuration repository with threat analytics.
    - D. A rule repository of a web application firewall with automated vulnerability prevention features.

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: B

    Explanation:
    - Amazon CloudWatch is basically a metrics repository.
    - An AWS service -- such as Amazon EC2 -- puts metrics into the repository, and you retrieve statistics based on those metrics.
    - If you put your own custom metrics into the repository, you can retrieve statistics on these metrics as well.

    Reference: <https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/> cloudwatch_architecture.html

    </details>

26. Which service allows a company with multiple AWS accounts to combine its usage to obtain volume discounts?
    - A. AWS Server Migration Service
    - B. AWS Organizations
    - C. AWS Budgets
    - D. AWS Trusted Advisor

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: B

    Explanation:
    - use the consolidated billing feature in AWS Organizations to consolidate billing and payment for multiple AWS accounts or multiple Amazon Internet Services Pvt. Ltd (AISPL) accounts.
    - Every organization in AWS Organizations has a master account that pays the charges of all the member accounts.
    - Consolidated billing has the following benefits:
      - One bill You get one bill for multiple accounts.
      - Easy tracking You can track the charges across multiple accounts and download the combined cost and usage data.
      - Combined usage You can combine the usage across all accounts in the organization to share the volume pricing discounts and Reserved Instance discounts. This can result in a lower charge for your project, department, or company than with individual standalone accounts. For more information, see Volume Discounts.
      - No extra fee Consolidated billing is offered at no additional cost.

    </details>

27. Which of the following services could be used to deploy an application to servers running on-premises? (Select TWO.)
    - A. AWS Elastic Beanstalk
    - B. AWS OpsWorks
    - C. AWS CodeDeploy
    - D. AWS Batch
    - E. AWS X-Ray

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: BC

    Explanation:
    - <https://docs.aws.amazon.com/codedeploy/latest/userguide/instances-on-premises.html>
    - <https://aws.amazon.com/blogs/aws/opsworks-on-prem-and-existing-instances/>

    </details>

28. Which Amazon EC2 pricing model adjusts based on supply and demand of EC2 instances?
    - A. On-Demand Instances
    - B. Reserved Instances
    - C. Spot Instances
    - D. Convertible Reserved Instances

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: C

    Explanation:
    - In the new model, the Spot prices are more predictable, updated less frequently, and are determined by supply and demand for Amazon EC2 spare capacity, not bid prices.

    Reference: <https://aws.amazon.com/blogs/compute/new-amazon-ec2-spot-pricing/>

    </details>

29. Which design principles for cloud architecture are recommended when re-architecting a large monolithic application? (Select TWO.)
    - A. Use manual monitoring.
    - B. Use fixed servers.
    - C. Implement loose coupling.
    - D. Rely on individual components.
    - E. Design for scalability.

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: CE

    </details>

30. Which is the MINIMUM AWS Support plan that allows for one-hour target response time for support cases?
    - A. Enterprise
    - B. Business
    - C. Developer
    - D. Basic

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: B

    Explanation: <https://aws.amazon.com/premiumsupport/plans/>

    </details>

31. Where can AWS compliance and certification reports be downloaded?
    - A. AWS Artifact
    - B. AWS Concierge
    - C. AWS Certificate Manager
    - D. AWS Trusted Advisor

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: A

    Explanation:
    - AWS Artifact is your go-to, central resource for compliance-related information that matters to you.
    - It provides on-demand access to AWS's security and compliance reports and select online agreements.
    - The AWS SOC 2 report is particularly helpful for completing questionnaires because it provides a comprehensive description of the implementation and operating effectiveness of AWS security controls.
    - Another useful document is the Executive Briefing within the AWS FedRAMP Partner Package.

    Reference: <https://aws.amazon.com/compliance/faq/>

    </details>

32. Which AWS service provides a customized view of the health of specific AWS services that power a customer's workloads running on AWS?
    - A. AWS Service Health Dashboard
    - B. AWS X-Ray
    - C. AWS Personal Health Dashboard
    - D. Amazon CloudWatch

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: C

    </details>

33. Which of the following is an advantage of consolidated billing on AWS?
    - A. Volume pricing qualification
    - B. Shared access permissions
    - C. Multiple bills per account
    - D. Eliminates the need for tagging

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: A

    Explanation:
    - If you have multiple standalone accounts, your charges might decrease if you add the accounts to an organization.
    - AWS combines usage from all accounts in the organization to qualify you for volume pricing discounts.

    Reference: <https://help.nops.io/consolidated-billing>

    </details>

34. Which of the following steps should be taken by a customer when conducting penetration testing on AWS?
    - A. Conduct penetration testing using Amazon Inspector, and then notify AWS support.
    - B. Request and wait for approval from the customer's internal security team, and then conduct testing.
    - C. Notify AWS support, and then conduct testing immediately.
    - D. Request and wait for approval from AWS support, and then conduct testing.

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: D

    Explanation:
    - AWS customers are welcome to carry out security assessments or penetration tests against their AWS infrastructure without prior approval for 8 services.

    Reference: <https://aws.amazon.com/security/penetration-testing/>

    </details>

35. Which of the following AWS features enables a user to launch a pre-configured Amazon Elastic Compute Cloud (Amazon EC2) instance?
    - A. Amazon Elastic Block Store (Amazon EBS)
    - B. Amazon Machine Image
    - C. Amazon EC2 Systems Manager
    - D. Amazon AppStream 2.0

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: B

    Explanation:
    - To use Amazon EC2, you simply:
    - Select a pre-configured, templated Amazon Machine Image (AMI) to get up and running immediately. Or create an AMI containing your applications, libraries, data, and associated configuration settings.
    - Configure security and network access on your Amazon EC2 instance.
    - Choose which instance type(s) you want, then start, terminate, and monitor as many instances of your AMI as needed, using the web service APIs or the variety of management tools provided.
    - Determine whether you want to run in multiple locations, utilize static IP endpoints, or attach persistent block storage to your instances.
    - Pay only for the resources that you actually consume, like instance-hours or data transfer.

    Reference: <https://aws.amazon.com/ec2/features/>

    </details>

36. How would an AWS customer easily apply common access controls to a large set of users?
    - A. Apply an IAM policy to an IAM group.
    - B. Apply an IAM policy to an IAM role.
    - C. Apply the same IAM policy to all IAM users with access to the same workload.
    - D. Apply an IAM policy to an Amazon Cognito user pool.

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: A

    Explanation:
    - Instead of defining permissions for individual IAM users, it's usually more convenient to create groups that relate to job functions (administrators, developers, accounting, etc.).
    - Next, define the relevant permissions for each group. Finally, assign IAM users to those groups. All the users in an IAM group inherit the permissions assigned to the group.
    - That way, you can make changes for everyone in a group in just one place. As people move around in your company, you can
    simply change what IAM group their IAM user belongs to.

    Reference: <https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html>

    </details>

37. Which AWS Cost Management tool allows you to view the most granular data about your AWS bill?
    - A. AWS Cost Explorer
    - B. AWS Budgets
    - C. AWS Cost and Usage report
    - D. AWS Billing dashboard

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: C

    Explanation:
    - The Cost & Usage Report is your one-stop-shop for accessing the most granular data about your AWS costs and usage.
    - You can also load your cost and usage information into Amazon Athena, Amazon Redshift, AWS QuickSight, or a tool of your choice.

    Reference: <https://aws.amazon.com/aws-cost-management/>

    </details>

38. Which of the following can an AWS customer use to launch a new Amazon Relational Database Service (Amazon RDS) cluster? (Select TWO.)
    - A. AWS Concierge
    - B. AWS CloudFormation
    - C. Amazon Simple Storage Service (Amazon S3)
    - D. Amazon EC2 Auto Scaling
    - E. AWS Management Console

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: BE

    </details>

39. Which of the following is an AWS Cloud architecture design principle?
    - A. Implement single points of failure.
    - B. Implement loose coupling.
    - C. Implement monolithic design.
    - D. Implement vertical scaling.

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: B

    Explanation:
    - Loose coupling between services can also be done through asynchronous integration. It involves one component that generates events and another that consumes them.
    - The two components do not integrate through direct point-to-point interaction, but usually through an intermediate durable storage layer.
    - This approach decouples the two components and introduces additional resiliency.
    - So, for example, if a process that is reading messages from the queue fails, messages can still be added to the queue to be processed when the system recovers.

    Reference: <https://www.botmetric.com/blog/aws-cloud-architecture-design-principles/>

    </details>

40. Which of the following security measures protect access to an AWS account? (Select TWO.)
    - A. Enable AWS CloudTrail.
    - B. Grant least privilege access to IAM users.
    - C. Create one IAM user and share with many developers and users.
    - D. Enable Amazon CloudFront.
    - E. Activate multi-factor authentication (MFA) for privileged users.

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: BE

    Explanation:
    - If you decided to create service accounts (that is, accounts used for programmatic access by applications running outside of the AWS environment) and generate access keys for them, you should create a dedicated service account for each use case.
    - This will allow you to restrict the associated policy to only the permissions needed for the particular use case, limiting the blast radius if the credentials are compromised.
    - For example, if a monitoring tool and a release management tool both require access to your AWS environment, create two separate service accounts with two separate policies that define the minimum set of permissions for each tool.

    Reference: <https://aws.amazon.com/blogs/security/guidelines-for-protecting-your-aws-account-while-using-programmatic-access/>

    </details>

41. Which service provides a hybrid storage service that enables on-premises applications to seamlessly use cloud storage?
    - A. Amazon Glacier
    - B. AWS Snowball
    - C. AWS Storage Gateway
    - D. Amazon Elastic Block Storage (Amazon EBS)

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: C

    Explanation:
    - AWS Storage Gateway is a hybrid cloud storage service that gives you on-premises access to virtually unlimited cloud storage. Customers use Storage Gateway to simplify storage management and reduce costs for key hybrid cloud storage use cases.
    - These include moving tape backups to the cloud, reducing on-premises storage with cloud-backed file shares, providing low latency access to data in AWS for on- premises applications, as well as various migration, archiving,
    processing, and disaster recovery use cases.

    Reference: <https://aws.amazon.com/storagegateway/?whats-new-cards.sort-by=item.additionalFields.postDateTime&whats-new-cards.sort-order=desc>

    </details>

42. Which of the following services falls under the responsibility of the customer to maintain operating system configuration, security patching, and networking?
    - A. Amazon RDS
    - B. Amazon EC2
    - C. Amazon ElastiCache
    - D. AWS Fargate

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: B

    Explanation:
    - The customer is responsible for managing, support, patching and control of the guest operating system and AWS services provided like EC2.

    Reference: <https://www.whizlabs.com/blog/aws-security-shared-responsibility/>

    </details>

43. Which of the following is an important architectural design principle when designing cloud applications?
    - A. Use multiple Availability Zones.
    - B. Use tightly coupled components.
    - C. Use open source software.
    - D. Provision extra capacity.

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: A

    Explanation:
    - Data Center resilience is practiced through Availability Zones across data centers that reduce the impact of failures.
    - Fault isolation improvement can be made to traditional horizontal scaling by sharding (a method of grouping instances into groups called shards, instead of sending the traffic from all users to every node like in the traditional IT structure.)

    Reference: <https://www.botmetric.com/blog/aws-cloud-architecture-design-principles/>

    </details>

44. Which AWS support plan includes a dedicated Technical Account Manager?
    - A. Developer
    - B. Enterprise
    - C. Business
    - D. Basic

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: B

    Explanation:
    - The enterprise support plans supports technical account manager. Developer and business support plans are devoid of this facility.

    Reference: <https://aws.amazon.com/premiumsupport/plans/>

    </details>

45. Amazon Relational Database Service (Amazon RDS) offers which of the following benefits over traditional database management?
    - A. AWS manages the data stored in Amazon RDS tables.
    - B. AWS manages the maintenance of the operating system.
    - C. AWS automatically scales up instance types on demand.
    - D. AWS manages the database type.
    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: B

    </details>

46. Which service is best for storing common database query results, which helps to alleviate database access load?
    - A. Amazon Machine Learning
    - B. Amazon SQS
    - C. Amazon ElastiCache
    - D. Amazon EC2 Instance Store

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: C

    Explanation:
    - Amazon ElastiCache for Redis is a great choice for implementing a highly available, distributed, and secure in-memory cache to decrease access latency, increase throughput, and ease the load off your relational or NoSQL databases and applications.
    - ElastiCache can serve frequently requested items at sub- millisecond response times, and enables you to easily scale for higher loads without growing the costlier backend databases.
    - Database query results caching, persistent session caching, and full-page caching are all popular examples of caching with ElastiCache for Redis.

    Reference: <https://aws.amazon.com/products/databases/real-time-apps-elasticache-for-redis/>

    </details>

47. Which of the following is a component of the shared responsibility model managed entirely by AWS?
    - A. Patching operating system software
    - B. Encrypting data
    - C. Enforcing multi-factor authentication
    - D. Auditing physical data center assets

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: D

    Explanation:
    - Of course, Amazon is responsible for auditing physical data center assets and resources since it is the property of Amazon Inc. Customers have no access to physical sites, hence they are not responsible for maintaining physical data center assets.

    </details>

48. Which options does AWS make available for customers who want to learn about security in the cloud in an instructor-led setting? (Select TWO.)
    - A. AWS Trusted Advisor
    - B. AWS Online Tech Talks
    - C. AWS Blog
    - D. AWS Forums
    - E. AWS Classroom Training

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: B, E

    Explanation:
    - AWS Training and Certification builds your competence, confidence, and credibility through practical cloud skills that help you innovate and build your future.
    - Our content is built by experts at AWS and updated regularly so you're always learning the latest and keeping your cloud skills fresh.
    - Amazon offer both digital and classroom training including private on-site training. You can choose to learn online at your own pace or learn from an accredited AWS instructor.
    - Whether you're just starting out, building on existing IT skills, or sharpening your cloud knowledge, AWS Training and Certification can help you be more effective and do more in the cloud.

    Reference: <https://aws.amazon.com/training/course-descriptions/>

    </details>

49. Which of the following features can be configured through the Amazon Virtual Private Cloud (Amazon VPC) Dashboard? (Select TWO.)
    - A. Amazon CloudFront distributions
    - B. Amazon Route 53
    - C. Security Groups
    - D. Subnets
    - E. Elastic Load Balancing

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: CD

    Explanation:
    - Amazon Virtual Private Cloud (Amazon VPC) lets you provision a logically isolated section of the AWS Cloud where you can launch AWS resources in a virtual network that you define.
    - You have complete control over your virtual networking environment, including selection of your own IP address range, creation of subnets, and configuration of route tables and network gateways.
    - You can use both IPv4 and IPv6 in your VPC for secure and easy access to resources and applications.
    - You can easily customize the network configuration for your Amazon VPC.
    - For example, you can create a public-facing subnet for your web servers that has access to the Internet, and place your backend systems such as databases or application servers in a private-facing subnet with no Internet access.
    - You can leverage multiple layers of security, including security groups and network access control lists, to help control access to Amazon EC2 instances in each subnet.

    Reference: <https://aws.amazon.com/vpc/>

    </details>

50. If each department within a company has its own AWS account, what is one way to enable consolidated billing?
      - A. Use AWS Budgets on each account to pay only to budget.
      - B. Contact AWS Support for a monthly bill.
      - C. Create an AWS Organization from the payer account and invite the other accounts to join.
      - D. Put all invoices into one Amazon Simple Storage Service (Amazon S3) bucket, load data into Amazon Redshift, and then run a billing report.

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: C

    Explanation: <https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/consolidated-billing.html>

    </details>

