---
layout: exam
---

# Practice Exam 16

1. What will help a company perform a cost benefit analysis of migrating to the AWS Cloud?
    - A. Cost Explorer
    - B. AWS Total Cost of Ownership (TCO) Calculator
    - C. AWS Simple Monthly Calculator
    - D. AWS Trusted Advisor

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: B

    Explanation:
    - AWS TCO calculators allow you to estimate the cost savings when using AWS and provide a detailed set of reports that can be used in executive presentations.
    - The calculators also give you the option to modify assumptions that best meet your business needs.

    Reference: <https://aws.amazon.com/tco-calculator/>

    </details>

2. Which of the following provides the ability to share the cost benefits of Reserved Instances across AWS accounts?
    - A. AWS Cost Explorer between AWS accounts
    - B. Linked accounts and consolidated billing
    - C. Amazon Elastic Compute Cloud (Amazon EC2) Reserved Instance Utilization Report
    - D. Amazon EC2 Instance Usage Report between AWS accounts

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: B

    Explanation:
    - The way that Reserved Instance discounts apply to accounts in an organization's consolidated billing family depends on whether Reserved Instance sharing is turned on or off for the account.
    - By default, Reserved Instance sharing for all accounts in an organization is turned on.
    - You can change this setting by Turning Off Reserved Instance Sharing for an account.
    - The capacity reservation for a Reserved Instance applies only to the account the Reserved Instance was purchased on, regardless of whether Reserved Instance sharing is turned on or off.

    Reference: <https://aws.amazon.com/premiumsupport/knowledge-center/ec2-ri-consolidated-billing/>

    </details>

3. A company has multiple AWS accounts and wants to simplify and consolidate its billing process. <br/>Which AWS service will achieve this?
    - A. AWS Cost and Usage Reports
    - B. AWS Organizations
    - C. AWS Cost Explorer
    - D. AWS Budgets

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: B

    Explanation:
    - You can use the consolidated billing feature in AWS Organizations to consolidate billing and payment for multiple AWS accounts or multiple Amazon Internet Services Pvt. Ltd (AISPL) accounts.
    - Every organization in AWS Organizations has a master (payer) account that pays the charges of all the member (linked)
    accounts.

    Reference: <https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/consolidated-billing.html>

    </details>

4. A company is designing an application hosted in a single AWS Region serving end-users spread across the world. The company wants to provide the end-users low latency access to the application data. <br/> Which of the following services will help fulfill this requirement?
    - A. Amazon CloudFront
    - B. AWS Direct Connect
    - C. Amazon Route 53 global DNS
    - D. Amazon Simple Storage Service (Amazon S3) transfer acceleration

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: A

    Explanation:
    - Amazon CloudFront is a content delivery network (CDN) service that distributes data from multiple locations worldwide, providing low-latency access to end-users.

    </details>

5. Which of the following deployment models enables customers to fully trade their capital IT expenses for operational expenses?
    - A. On-premises
    - B. Hybrid
    - C. Cloud
    - D. Platform as a service

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: C

    Explanation:
    - The cloud allows you to trade capital expenses (such as data centers and physical servers) for variable expenses, and only pay for IT as you consume it.
    - Plus, the variable expenses are much lower than what you would pay to do it yourself because of the economies of scale.

    Reference: <https://aws.amazon.com/what-is-cloud-computing/>

    </details>

6. How is asset management on AWS easier than asset management in a physical data center?
    - A. AWS provides a Configuration Management Database that users can maintain.
    - B. AWS performs infrastructure discovery scans on the customer's behalf.
    - C. Amazon EC2 automatically generates an asset report and places it in the customer's specified Amazon S3 bucket.
    - D. Users can gather asset metadata reliably with a few API calls.

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: B

    Explanation:
    - AWS assets are centrally managed through an inventory management system that stores and tracks owner, location, status, maintenance, and descriptive information for AWS-owned assets.
    - Following procurement, assets are scanned and tracked, and assets undergoing maintenance are checked and monitored for
    ownership, status, and resolution.

    Reference: <https://aws.amazon.com/compliance/data-center/controls/>

    </details>

7. What feature of Amazon RDS helps to create globally redundant databases?
    - A. Snapshots
    - B. Automatic patching and updating
    - C. Cross-Region read replicas
    - D. Provisioned IOPS

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: C

    Explanation: <https://docs.amazonaws.cn/en_us/AmazonRDS/latest/UserGuide/rds-ug.pdf>

    </details>

8. Using AWS Identity and Access Management (IAM) to grant access only to the resources needed to perform a task is a concept known as:
    - A. restricted access.
    - B. as-needed access.
    - C. least privilege access.
    - D. token access.

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: C

    Explanation:
    - When you create IAM policies, follow the standard security advice of granting least privilege, or granting only the permissions required to perform a task.
    - Determine what users (and roles) need to do and then craft policies that allow them to perform only those tasks.

    Reference: <https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html>

    </details>

9. Which methods can be used to identify AWS costs by departments? (Choose two.)
    - A. Enable multi-factor authentication for the AWS account root user.
    - B. Create separate accounts for each department.
    - C. Use Reserved Instances whenever possible.
    - D. Use tags to associate each instance with a particular department.
    - E. Pay bills using purchase orders.

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: BD

    Explanation:
    - Tags are key-value pairs that allow you to organize your AWS resources into groups. You can use tags to:
    - Visualize information about tagged resources in one place, in conjunction with Resource Groups.
    - View billing information using Cost Explorer and the AWS Cost and Usage report.
    - Send notifications about spending limits using AWS Budgets.
    - Use logical groupings of your resources that make sense for your infrastructure or business.
    - For example, you could organize your resources by:
      - Project
      - Cost center
      - Development environment
      - Application
      - Department

    Reference: <https://aws.amazon.com/premiumsupport/knowledge-center/tags-billing-cost-center-project/>

    </details>

10. Under the AWS shared responsibility model, customer responsibilities include which one of the following?
    - A. Securing the hardware, software, facilities, and networks that run all products and services.
    - B. Providing certificates, reports, and other documentation directly to AWS customers under NDA.
    - C. Configuring the operating system, network, and firewall.
    - D. Obtaining industry certifications and independent third-party attestations.

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: C

    Explanation: <https://aws.amazon.com/compliance/shared-responsibility-model/>

    </details>

11. Which managed AWS service provides real-time guidance on AWS security best practices?
    - A. AWS X-Ray
    - B. AWS Trusted Advisor
    - C. Amazon CloudWatch
    - D. AWS Systems Manager

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: B

    Explanation:
    - AWS offers premium services such as AWS Trusted Advisor, which provides real-time guidance to help you reduce cost, increase performance, and improve security.

    Reference: <https://www.ibm.com/downloads/cas/2N40X4PQ>

    </details>

12. Which feature adds elasticity to Amazon EC2 instances to handle the changing demand for workloads?
    - A. Resource groups
    - B. Lifecycle policies
    - C. Application Load Balancer
    - D. Amazon EC2 Auto Scaling

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: D

    Explanation:
    - Support for monitoring the health of each service independently, as health checks are defined at the target group level and many CloudWatch metrics are reported at the target group level.
    - Attaching a target group to an Auto Scaling group enables you to scale each service dynamically based on demand.

    Reference: <https://docs.aws.amazon.com/elasticloadbalancing/latest/application/introduction.html>

    </details>

13. Under the AWS shared responsibility model, customers are responsible for which aspects of security in the cloud? (Choose two.)
    - A. Visualization management
    - B. Hardware management
    - C. Encryption management
    - D. Facilities management
    - E. Firewall management

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: CE

    Explanation:
    - With the basic Cloud infrastructure secured and maintained by AWS, the responsibility for what goes into the cloud falls on you. This covers both client and server side encryption and network traffic protection, security of the operating system, network, and firewall configuration, followed by application security and identity and access management.
    - Firewall configuration remains the responsibility of the end user, which integrates at the platform and application management level. For example, RDS utilizes security groups, which you would be responsible for configuring and implementing.

    Reference: <https://cloudacademy.com/blog/aws-shared-responsibility-model-security/>

    </details>

14. Which AWS hybrid storage service enables on-premises applications to seamlessly use AWS Cloud storage through standard file-storage protocols?
    - A. AWS Direct Connect
    - B. AWS Snowball
    - C. AWS Storage Gateway
    - D. AWS Snowball Edge

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: C

    Explanation:
    - The AWS Storage Gateway service enables hybrid cloud storage between on-premises environments and the AWS Cloud.
    - It seamlessly integrates on-premises enterprise applications and workflows with Amazon's block and object cloud storage services through industry standard storage protocols.
    - It provides low-latency performance by caching frequently accessed data on premises, while storing data securely and durably in Amazon cloud storage services.
    - It provides an optimized data transfer mechanism and bandwidth management, which tolerates unreliable networks and minimizes the amount of data being transferred.
    - It brings the security, manageability, durability, and scalability of AWS to existing enterprise environments through native integration with AWS encryption, identity management, monitoring, and storage services. Typical use cases include backup and archiving, disaster recovery, moving data to S3 for in-cloud workloads, and tiered storage.

    Reference: <https://aws.amazon.com/storagegateway/faqs/>

    </details>

15. What is a responsibility of AWS in the shared responsibility model?
    - A. Updating the network ACLs to block traffic to vulnerable ports.
    - B. Patching operating systems running on Amazon EC2 instances.
    - C. Updating the firmware on the underlying EC2 hosts.
    - D. Updating the security group rules to block traffic to the vulnerable ports.

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: C

    Explanation: <https://cloudacademy.com/blog/aws-shared-responsibility-model-security/>

    </details>

16. Which architectural principle is used when deploying an Amazon Relational Database Service (Amazon RDS) instance in Multiple Availability Zone mode?
    - A. Implement loose coupling.
    - B. Design for failure.
    - C. Automate everything that can be automated.
    - D. Use services, not servers.

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: B

    Explanation:
    - Amazon RDS Multi-AZ deployments provide enhanced availability and durability for Database (DB) Instances, making them a natural fit for production database workloads.
    - When you provision a Multi-AZ DB Instance, Amazon RDS automatically creates a primary DB Instance and synchronously replicates the data to a standby instance in a different Availability Zone (AZ).
    - Each AZ runs on its own physically distinct, independent infrastructure, and is engineered to be highly reliable.
    - In case of an infrastructure failure, Amazon RDS performs an automatic failover to the standby (or to a read replica in the case of Amazon Aurora), so that you can resume database operations as soon as the failover is complete.
    - Since the endpoint for your DB Instance remains the same after a failover, your application can resume database operation without the need for manual administrative intervention.

    Reference: <https://aws.amazon.com/rds/details/multi-az/>

    </details>

17. What does it mean to grant least privilege to AWS IAM users?
    - A. It is granting permissions to a single user only.
    - B. It is granting permissions using AWS IAM policies only.
    - C. It is granting AdministratorAccess policy permissions to trustworthy users.
    - D. It is granting only the permissions required to perform a given task.

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: D

    Explanation:
    - When you create IAM policies, follow the standard security advice of granting least privilege, or granting only the permissions required to perform a task.
    - Determine what users (and roles) need to do and then craft policies that allow them to perform only those tasks.

    Reference: <https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html#grant-least-privilege>

    </details>

18. What is a benefit of loose coupling as a principle of cloud architecture design?
    - A. It facilitates low-latency request handling.
    - B. It allows applications to have dependent workflows.
    - C. It prevents cascading failures between different components.
    - D. It allows companies to focus on their physical data center operations.

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: C

    Explanation:
    - IT systems should ideally be designed in a way that reduces inter-dependencies.
    - Your components need to be loosely coupled to avoid changes or failure in one of the components from affecting others.
    - Your infrastructure also needs to have well defined interfaces that allow the various components to interact with each other only through specific, technology-agnostic interfaces.
    - Modifying any underlying operations without affecting other components should be made possible.

    Reference: <https://www.botmetric.com/blog/aws-cloud-architecture-design-principles/>

    </details>

19. A director has been tasked with investigating hybrid cloud architecture. The company currently accesses AWS over the public internet.<br/>Which service will facilitate private hybrid connectivity?
    - A. Amazon Virtual Private Cloud (Amazon VPC) NAT Gateway
    - B. AWS Direct Connect
    - C. Amazon Simple Storage Service (Amazon S3) Transfer Acceleration
    - D. AWS Web Application Firewall (AWS WAF)

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: B

    Explanation:
    - Amazon VPC provides multiple network connectivity options for you to leverage depending on your current network designs and requirements.
    - These connectivity options include leveraging either the internet or an AWS Direct Connect connection as the network backbone and terminating the connection into either AWS or user-managed network endpoints.
    - Additionally, with AWS, you can choose how network routing is delivered between Amazon VPC and your networks, leveraging either AWS or user-managed network equipment and routes.

    Reference: <https://docs.aws.amazon.com/whitepapers/latest/aws-vpc-connectivity-options/> introduction.html

    </details>

20. A company's web application currently has tight dependencies on underlying components, so when one component fails the entire web application fails. <br> Applying which AWS Cloud design principle will address the current design issue?
    - A. Implementing elasticity, enabling the application to scale up or scale down as demand changes.
    - B. Enabling several EC2 instances to run in parallel to achieve better performance.
    - C. Focusing on decoupling components by isolating them and ensuring individual components can function when other components fail.
    - D. Doubling EC2 computing resources to increase system fault tolerance.

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: C

    </details>

21. How can a customer increase security to AWS account logons? (Choose two.)
    - A. Configure AWS Certificate Manager
    - B. Enable Multi-Factor Authentication (MFA)
    - C. Use Amazon Cognito to manage access
    - D. Configure a strong password policy
    - E. Enable AWS Organizations

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: BD

    Explanation:
    - Your root account should always be protected by Multi-Factor Authentication (MFA).
    - This additional layer of security helps protect against unauthorized logins to your account by requiring two factors: something you know (a password) and something you have (for example, an MFA device).
    - AWS supports virtual and hardware MFA devices and U2F security keys.
    - Cognito can be used as an Identity Provider (IdP), where it stores and maintains users and credentials securely for your applications, or it can be integrated with OpenID Connect, SAML, and other popular web identity providers like Amazon.com.
    - Using Amazon Cognito, you can generate temporary access credentials for your clients to access AWS services, eliminating the need to store long-term credentials in client applications.

    Reference: <https://aws.amazon.com/blogs/security/guidelines-for-protecting-your-aws-account-while-using-programmatic-access/>

    </details>

22. What AWS service would be used to centrally manage AWS access across multiple accounts?
    - A. AWS Service Catalog
    - B. AWS Config
    - C. AWS Trusted Advisor
    - D. AWS Organizations

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: D

    Explanation:
    - To improve control over your AWS environment, you can use AWS Organizations to create groups of accounts, and then attach policies to a group to ensure the correct policies are applied across the accounts without requiring custom scripts and manual processes.

    Reference: <https://aws.amazon.com/organizations/>

    </details>

23. Which AWS service can a customer use to set up an alert notification when the account is approaching a particular dollar amount?
    - A. AWS Cost and Usage reports
    - B. AWS Budgets
    - C. AWS Cost Explorer
    - D. AWS Trusted Advisor

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: B

    Explanation: <https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/monitor_estimated_charges_with_cloudwatch.html>

    </details>

24. What can users access from AWS Artifact?
    - A. AWS security and compliance documents
    - B. A download of configuration management details for all AWS resources
    - C. Training materials for AWS services
    - D. A security assessment of the applications deployed in the AWS Cloud

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: A

    Explanation:
    - You can use AWS Artifact Reports to download AWS security and compliance documents, such as AWS ISO certifications, Payment Card Industry (PCI), and System and Organization Control (SOC) reports.

    Reference: <https://aws.amazon.com/artifact/faq/>

    </details>

25. Which is the MINIMUM AWS Support plan that provides designated Technical Account Managers?
    - A. Enterprise
    - B. Business
    - C. Developer
    - D. Basic

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: A

    Explanation: <https://aws.amazon.com/premiumsupport/plans/>

    </details>

26. Which of the following is an AWS Well-Architected Framework design principle related to reliability?
    - A. Deployment to a single Availability Zone
    - B. Ability to recover from failure
    - C. Design for cost optimization
    - D. Perform operations as code

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: B

    Explanation: <https://aws.amazon.com/blogs/apn/the-5-pillars-of-the-aws-well-architected-framework/>

    </details>

27. Which type of AWS storage is ephemeral and is deleted when an instance is stopped or terminated?
    - A. Amazon EBS
    - B. Amazon EC2 instance store
    - C. Amazon EFS
    - D. Amazon S3

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: B

    Explanation:
    - When you stop or terminate an instance, every block of storage in the instance store is reset.
    - Therefore, your data cannot be accessed through the instance store of another instance.

    Reference: <https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/InstanceStorage.html>

    </details>

28. What is an advantage of using the AWS Cloud over a traditional on-premises solution?
    - A. Users do not have to guess about future capacity needs.
    - B. Users can utilize existing hardware contracts for purchases.
    - C. Users can fix costs no matter what their traffic is.
    - D. Users can avoid audits by using reports from AWS.

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: A

    Explanation: <https://data-flair.training/blogs/aws-advantages/>

    </details>

29. Which of the following is an AWS-managed compute service?
    - A. Amazon SWF
    - B. Amazon EC2
    - C. AWS Lambda
    - D. Amazon Aurora

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: C

    Explanation: <https://docs.aws.amazon.com/whitepapers/latest/aws-overview/compute-services.html>

    </details>

30. Which of the following is an important architectural principle when designing cloud applications?
    - A. Store data and backups in the same region.
    - B. Design tightly coupled system components.
    - C. Avoid multi-threading.
    - D. Design for failure

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: D

    Explanation:
    - There are six design principles for operational excellence in the cloud:
      - Perform operations as code
      - Annotate documentation
      - Make frequent, small, reversible changes
      - Refine operations procedures frequently
      - Anticipate failure
      - Learn from all operational failures

    Reference: <https://aws.amazon.com/blogs/apn/the-5-pillars-of-the-aws-well-architected-framework/>

    </details>

31. Which mechanism allows developers to access AWS services from application code?
    - A. AWS Software Development Kit
    - B. AWS Management Console
    - C. AWS CodePipeline
    - D. AWS Config

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: A

    Explanation: <https://aws.amazon.com/tools/>

    </details>

32. Which Amazon EC2 pricing model is the MOST cost efficient for an uninterruptible workload that runs once a year for 24 hours?
    - A. On-Demand Instances
    - B. Reserved Instances
    - C. Spot Instances
    - D. Dedicated Instances

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: A

    Explanation:
    - With On-Demand instances, you pay for compute capacity by the hour or the second depending on which instances you run.
    - No longer-term commitments or upfront payments are needed.
    - You can increase or decrease your compute capacity depending on the demands of your application and only pay the specified per hourly rates for the instance you use.

    Reference: <https://aws.amazon.com/ec2/pricing/>

    </details>

33. Which of the following services is a MySQL-compatible database that automatically grows storage as needed?
    - A. Amazon Elastic Compute Cloud (Amazon EC2)
    - B. Amazon Relational Database Service (Amazon RDS) for MySQL
    - C. Amazon Lightsail
    - D. Amazon Aurora

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: D

    Explanation:
    - Amazon Aurora is a relational database service that combines the speed and availability of high-end commercial databases with the simplicity and cost-effectiveness of open source databases.
    - The MySQL- compatible edition of Aurora delivers up to 5X the throughput of standard MySQL running on the same hardware, and enables existing MySQL applications and tools to run without requiring modification.
    - Amazon Aurora will automatically grow the size of your database volume as your database storage needs grow.
    - Your volume will grow in increments of 10 GB up to a maximum of 64 TB. You don't need to provision excess storage for your database to handle future growth.

    Reference: <https://aws.amazon.com/rds/aurora/mysql-features/>

    </details>

34. Which Amazon Virtual Private Cloud (Amazon VPC) feature enables users to connect two VPCs together?
    - A. Amazon VPC endpoints
    - B. Amazon Elastic Compute Cloud (Amazon EC2) ClassicLink
    - C. Amazon VPC peering
    - D. AWS Direct Connect

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: C

    Explanation:
    - A VPC peering connection is a networking connection between two VPCs that enables you to route traffic between them using private IPv4 addresses or IPv6 addresses.
    - Instances in either VPC can communicate with each other as if they are within the same network.
    - You can create a VPC peering connection between your own VPCs, or with a VPC in another AWS account.
    - The VPCs can be in different regions (also known as an inter-region VPC peering connection).

    Reference: <https://docs.aws.amazon.com/vpc/latest/peering/what-is-vpc-peering.html>

    </details>

35. Which service's PRIMARY purpose is software version control?
    - A. Amazon CodeStar
    - B. AWS Command Line Interface (AWS CLI)
    - C. Amazon Cognito
    - D. AWS CodeCommit

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: D

    Explanation:
    - AWS CodeCommit is a version control service hosted by Amazon Web Services that you can use to privately store and manage assets (such as documents, source code, and binary files) in the cloud.

    Reference: <https://docs.aws.amazon.com/codecommit/latest/userguide/welcome.html>

    </details>

36. A company is considering migrating its applications to AWS. The company wants to compare the cost of running the workload on-premises to running the equivalent workload on the AWS platform. <br/>Which tool can be used to perform this comparison?
    - A. AWS Simple Monthly Calculator
    - B. AWS Total Cost of Ownership (TCO) Calculator
    - C. AWS Billing and Cost Management console
    - D. Cost Explorer

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: B

    Explanation:
    - TCO calculator compare the cost of running your applications in an on-premises or colocation environment to AWS.

    Reference: <https://awstcocalculator.com>

    </details>

37. Which AWS service provides a secure, fast, and cost-effective way to migrate or transport exabyte-scale datasets into AWS?
    - A. AWS Batch
    - B. AWS Snowball
    - C. AWS Migration Hub
    - D. AWS Snowmobile

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: D

    Explanation:
    - AWS Snowmobile is an exabyte-scale data transfer service that can move extremely large amounts of data to AWS in a fast, secure, and cost-effective manner.
    - You can transfer up to 100PB per Snowmobile, a 45-foot long ruggedized shipping container, pulled by a semi-trailer truck. - Snowmobile makes it easy to move massive volumes of data to the cloud, including video libraries, image repositories, or even a complete data center migration.
    - All data is encrypted with 256-bit encryption and you can manage your encryption keys with AWS Key Management Service (AWS KMS).
    - Snowmobile includes GPS tracking, alarm monitoring, 24/7 video surveillance and an optional escort security vehicle while in transit.

    Reference: <https://aws.amazon.com/about-aws/whats-new/2016/11/move-exabyte-scale-data-sets-with>- aws-snowmobile/

    </details>

38. Which of the following BEST describe the AWS pricing model? (Choose two.)
    - A. Fixed-term
    - B. Pay-as-you-go
    - C. Colocation
    - D. Planned
    - E. Variable cost

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: BE

    Explanation: <https://d0.awsstatic.com/whitepapers/aws_pricing_overview.pdf>

    </details>

39. Which load balancer types are available with Elastic Load Balancing (ELB)? (Choose two.)
    - A. Public load balancers with AWS Application Auto Scaling capabilities
    - B. F5 Big-IP and Citrix NetScaler load balancers
    - C. Classic Load Balancers
    - D. Cross-zone load balancers with public and private IPs
    - E. Application Load Balancers

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: CE

    Explanation:
    - Elastic Load Balancing supports the following types of load balancers: Application Load Balancers, Network Load Balancers, and Classic Load Balancers.
    - Amazon ECS services can use either type of load balancer.
    - Application Load Balancers are used to route HTTP/HTTPS (or Layer 7) traffic.
    - Network Load Balancers and Classic Load Balancers are used to route TCP (or Layer 4) traffic.

    Reference: <https://docs.aws.amazon.com/AmazonECS/latest/developerguide/load-balancer-types.html>

    </details>

40. Why should a company choose AWS instead of a traditional data center?
    - A. AWS provides users with full control over the underlying resources.
    - B. AWS does not require long-term contracts and provides a pay-as-you-go model.
    - C. AWS offers edge locations in every country, supporting global reach.
    - D. AWS has no limits on the number of resources that can be created.

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: B

    Explanation:
    - AWS offers you a pay-as-you-go approach for pricing for over 160 cloud services.
    - With AWS you pay only for the individual services you need, for as long as you use them, and without requiring long-term contracts or complex licensing.
    - AWS pricing is similar to how you pay for utilities like water and electricity.
    - You only pay for the services you consume, and once you stop using them, there are no additional costs or termination fees.

    Reference: <https://aws.amazon.com/pricing/>

    </details>

41. Which solution provides the FASTEST application response times to frequently accessed data to users in multiple AWS Regions?
    - A. AWS CloudTrail across multiple Availability Zones
    - B. Amazon CloudFront to edge locations
    - C. AWS CloudFormation in multiple regions
    - D. A virtual private gateway over AWS Direct Connect

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: B

    Explanation:
    - You can deliver content and decrease end-user latency of your web application using Amazon CloudFront.
    - CloudFront speeds up content delivery by leveraging its global network of data centers, known as edge locations, to reduce delivery time by caching your content close to your end users.
    - CloudFront fetches your content from an origin, such as an Amazon S3 bucket, an Amazon EC2 instance, an Amazon Elastic Load
    Balancing load balancer or your own web server, when it's not already in an edge location.
    - CloudFront can be used to deliver your entire website or application, including dynamic, static, streaming, and interactive content.

    Reference: <https://aws.amazon.com/getting-started/tutorials/deliver-content-faster/>

    </details>

42. Which AWS service provides a self-service portal for on-demand access to AWS compliance reports?
    - A. AWS Config
    - B. AWS Certificate Manager
    - C. Amazon Inspector
    - D. AWS Artifact

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: D

    Explanation:
    - AWS Artifact is your go-to, central resource for compliance-related information that matters to you.
    - It provides on-demand access to AWS' security and compliance reports and select online agreements.
    - Reports available in AWS Artifact include our Service Organization Control (SOC) reports, Payment Card Industry (PCI) reports, and certifications from accreditation bodies across geographies and compliance verticals that validate the implementation and operating effectiveness of AWS security controls.
    - Agreements available in AWS Artifact include the Business Associate Addendum (BAA) and the Nondisclosure Agreement (NDA).

    Reference: <https://aws.amazon.com/artifact/>

    </details>

43. Which of the following AWS services can be used to run a self-managed database?
    - A. Amazon Route 53
    - B. AWS X-Ray
    - C. AWS Snowmobile
    - D. Amazon Elastic Compute Cloud (Amazon EC2)

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: D

    Explanation: <https://severalnines.com/news/aws-users-prefer-self-managed-databases>

    </details>

44. What exclusive benefit is provided to users with Enterprise Support?
    - A. Access to a Technical Project Manager
    - B. Access to a Technical Account Manager
    - C. Access to a Cloud Support Engineer
    - D. Access to a Solutions Architect

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: B

    Explanation: <https://aws.amazon.com/premiumsupport/plans/enterprise/>

    </details>

45. How can a user protect against AWS service disruptions if a natural disaster affects an entire geographic area?
    - A. Deploy applications across multiple Availability Zones within an AWS Region.
    - B. Use a hybrid cloud computing deployment model within the geographic area.
    - C. Deploy applications across multiple AWS Regions.
    - D. Store application artifacts using AWS Artifact and replicate them across multiple AWS Regions.

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: C

    Explanation:
    - An AWS Region is a geographic location where AWS provides multiple, physically separated and isolated Availability Zones which are connected with low latency, high throughput, and highly redundant networking.

    Reference: <https://aws.amazon.com/s3/faqs/>

    </details>

46. How does AWS MOST effectively reduce computing costs for a growing start-up company?
    - A. It provides on-demand resources for peak usage.
    - B. It automates the provisioning of individual developer environments.
    - C. It automates customer relationship management.
    - D. It implements a fixed monthly computing budget.

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: A

    Explanation:
    - You can continue to optimize your spend and keep your development costs low by making sure you revisit your architecture often, to adjust to your startup growth.
    - Manage your cost further by leveraging different options such as S3 CloudFront for caching & offloading to reduce cost of EC2 computing, as well as Elastic Load Balancing which prepares you for massive scale, high reliability and uninterrupted growth.
    - Another way to keep costs down is to use AWS Identity and Access Management solutions (IAM) to manage governance of your cost drivers effectively and by the right teams.

    Reference: <https://aws.amazon.com/startups/lean/>

    </details>

47. A startup is working on a new application that needs to go to market quickly. The application requirements may need to be adjusted in the near future. <br/> Which of the following is a characteristic of the AWS Cloud that would meet this specific need?
    - A. Elasticity
    - B. Reliability
    - C. Performance
    - D. Agility

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: D

    Explanation:
    - Agile is a time boxed, iterative approach to software delivery that builds software incrementally from the start of the project, instead of trying to deliver it all at once near the end.

    Reference: <http://www.agilenutshell.com>

    </details>

48. Which AWS Support plan provides a full set of AWS Trusted Advisor checks?
    - A. Business and Developer Support
    - B. Business and Basic Support
    - C. Enterprise and Developer Support
    - D. Enterprise and Business Support

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: D

    Explanation: <https://aws.amazon.com/premiumsupport/plans/>

    </details>

49. Which of the following services have Distributed Denial of Service (DDoS) mitigation features? (Choose two.)
    - A. AWS WAF
    - B. Amazon DynamoDB
    - C. Amazon EC2
    - D. Amazon CloudFront
    - E. Amazon Inspector

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: AD

    Explanation: <https://aws.amazon.com/shield/>

    </details>

50. When building a cloud Total Cost of Ownership (TCO) model, which cost elements should be considered for workloads running on AWS? (Choose three.)
    - A. Compute costs
    - B. Facilities costs
    - C. Storage costs
    - D. Data transfer costs
    - E. Network infrastructure costs
    - F. Hardware lifecycle costs

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: ACD

    Explanation:
    <https://aws.amazon.com/blogs/aws/the-new-aws-tco-calculator/>

    </details>

