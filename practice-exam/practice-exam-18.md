---
layout: exam
---

# Practice Exam 18

1. Under the AWS shared responsibility model, which of the following is an example of security in the AWS Cloud?
    - A. Managing edge locations
    - B. Physical security
    - C. Firewall configuration
    - D. Global infrastructure

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: C

    Explanation: <https://aws.amazon.com/compliance/shared-responsibility-model/>

    </details>

2. How can an AWS user with an AWS Basic Support plan obtain technical assistance from AWS?
    - A. AWS Senior Support Engineers
    - B. AWS Technical Account Managers
    - C. AWS Trusted Advisor
    - D. AWS Discussion Forums

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: D

    Explanation: <https://aws.amazon.com/premiumsupport/faqs/>

    </details>

3. Which of the following are pillars of the AWS Well-Architected Framework? (Choose two.)
    - A. Multiple Availability Zones
    - B. Performance efficiency
    - C. Security
    - D. Encryption usage
    - E. High availability

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: BC

    Explanation: <https://d1.awsstatic.com/whitepapers/architecture/AWS_Well-Architected_Framework.pdf>

    </details>

4. After selecting an Amazon EC2 Dedicated Host reservation, which pricing option would provide the largest discount?
    - A. No upfront payment
    - B. Hourly on-demand payment
    - C. Partial upfront payment
    - D. All upfront payment

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: D

    Explanation: <https://aws.amazon.com/ec2/pricing/reserved-instances/pricing/>

    </details>

5. What is an advantage of deploying an application across multiple Availability Zones?
    - A. There is a lower risk of service failure if a natural disaster causes a service disruption in a given AWS Region.
    - B. The application will have higher availability because it can withstand a service disruption in one Availability Zone.
    - C. There will be better coverage as Availability Zones are geographically distant and can serve a wider area.
    - D. There will be decreased application latency that will improve the user experience.

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: B

    Explanation: <https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html>

    </details>

6. A Cloud Practitioner is asked how to estimate the cost of using a new application on AWS. <br/> What is the MOST appropriate response?
    - A. Inform the user that AWS pricing allows for on-demand pricing.
    - B. Direct the user to the AWS Simple Monthly Calculator for an estimate.
    - C. Use Amazon QuickSight to analyze current spending on-premises.
    - D. Use Amazon AppStream 2.0 for real-time pricing analytics.

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: B

    Explanation: <https://aws.amazon.com/premiumsupport/knowledge-center/estimating-aws-resource-costs/>

    </details>

7. A company wants to migrate its applications to a VPC on AWS. These applications will need to access on-premises resources. <br/> What combination of actions will enable the company to accomplish this goal? (Choose two.)
    - A. Use the AWS Service Catalog to identify a list of on-premises resources that can be migrated.
    - B. Build a VPN connection between an on-premises device and a virtual private gateway in the new VPC.
    - C. Use Amazon Athena to query data from the on-premises database servers.
    - D. Connect the company's on-premises data center to AWS using AWS Direct Connect.
    - E. Leverage Amazon CloudFront to restrict access to static web content provided through the company's on-premises web servers.

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: BD

    Explanation: <https://aws.amazon.com/blogs/apn/amazon-vpc-for-on-premises-network-engineers-part-one/>

    </details>

8. A web application running on AWS has been spammed with malicious requests from a recurring set of IP addresses. <br/> Which AWS service can help secure the application and block the malicious traffic?
    - A. AWS IAM
    - B. Amazon GuardDuty
    - C. Amazon Simple Notification Service (Amazon SNS)
    - D. AWS WAF

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: D

    Explanation:
    - AWS WAF is a web application firewall that helps protect web applications from common web exploits that could affect application availability, compromise security, or consume excessive resources.
    - You can use AWS WAF to define customizable web security rules that control which traffic accesses your web applications.
    - If you use AWS Shield Advanced, you can use AWS WAF at no extra cost for those protected resources and can engage the DRT to create WAF rules.

    Reference: <https://aws.amazon.com/answers/networking/aws-ddos-attack-mitigation/>

    </details>

9. Treating infrastructure as code in the AWS Cloud allows users to:
    - A. automate migration of on-premises hardware to AWS data centers.
    - B. let a third party automate an audit of the AWS infrastructure.
    - C. turn over application code to AWS so it can run on the AWS infrastructure.
    - D. automate the infrastructure provisioning process.

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: D

    Explanation: <https://asperbrothers.com/blog/infrastructure-as-code-aws/>

    </details>

10. A company requires a dedicated network connection between its on-premises servers and the AWS Cloud. <br/> Which AWS service should be used?
    - A. AWS VPN
    - B. AWS Direct Connect
    - C. Amazon API Gateway
    - D. Amazon Connect

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: B

    Explanation:
    - You can use AWS Direct Connect to establish a private virtual interface from your on-premise network directly to your Amazon VPC, providing you with a private, high bandwidth network connection between your network and your VPC.
    - With multiple virtual interfaces, you can even establish private connectivity to multiple VPCs while maintaining network isolation.

    Reference: <https://aws.amazon.com/directconnect/>

    </details>

11. Which AWS service can be used to query stored datasets directly from Amazon S3 using standard SQL?
    - A. AWS Glue
    - B. AWS Data Pipeline
    - C. Amazon CloudSearch
    - D. Amazon Athena

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: D

    Explanation:
    - Amazon Athena is defined as "an interactive query service that makes it easy to analyze data directly in Amazon Simple Storage Service (Amazon S3) using standard SQL." So, it's another SQL query engine for large data sets stored in S3.
    - This is very similar to other SQL query engines, such as Apache Drill.
    - But unlike Apache Drill, Athena is limited to data only from Amazon's own S3 storage service. However, Athena is able to query a variety of file formats, including, but not limited to CSV, Parquet, JSON, etc.

    </details>

12. AWS CloudFormation is designed to help the user:
    - A. model and provision resources.
    - B. update application code.
    - C. set up data lakes.
    - D. create reports for billing.

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: A

    Explanation:
    - AWS CloudFormation provides a common language for you to model and provision AWS and third party application resources in your cloud environment.
    - AWS CloudFormation allows you to use programming languages or a simple text file to model and provision, in an automated and secure manner, all the resources needed for your applications across all regions and accounts.
    - This gives you a single source of truth for your AWS and third party resources.

    Reference: <https://aws.amazon.com/cloudformation/>

    </details>

13. Which of the following is an AWS database service?
    - A. Amazon Redshift
    - B. Amazon Elastic Block Store (Amazon EBS)
    - C. Amazon S3 Glacier
    - D. AWS Snowball

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: A

    Explanation: <https://www.sisense.com/glossary/redshift-database/>

    </details>

14. A Cloud Practitioner must determine if any security groups in an AWS account have been provisioned to allow unrestricted access for specific ports. <br/> What is the SIMPLEST way to do this?
    - A. Review the inbound rules for each security group in the Amazon EC2 management console to check for port 0.0.0.0/0.
    - B. Run AWS Trusted Advisor and review the findings.
    - C. Open the AWS IAM console and check the inbound rule filters for open access.
    - D. In AWS Config, create a custom rule that invokes an AWS Lambda function to review rules for inbound access.

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: B

    Explanation: <https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/ec2-security-groups.html>

    </details>

15. What are the benefits of developing and running a new application in the AWS Cloud compared to on-premises? (Choose two.)
    - A. AWS automatically distributes the data globally for higher durability.
    - B. AWS will take care of operating the application.
    - C. AWS makes it easy to architect for high availability.
    - D. AWS can easily accommodate application demand changes.
    - E. AWS takes care application security patching.

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: CD

    </details>

16. A user needs an automated security assessment report that will identify unintended network access to Amazon EC2 instances and vulnerabilities on those instances. <br/> Which AWS service will provide this assessment report?
    - A. EC2 security groups
    - B. AWS Config
    - C. Amazon Macie
    - D. Amazon Inspector

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: D

    Explanation:
    - Amazon Inspector is an automated security assessment service that helps improve the security and compliance of applications deployed on AWS.
    - AmazonInspector automatically assesses applications for exposure, vulnerabilities, and deviations from best practices.
    - After performing an assessment, Amazon Inspector produces a detailed list of security findings prioritized by level of severity.
    - These findings can be reviewed directly or as part of detailed assessment reports which are available via the Amazon Inspector console or API.

    Reference: <https://aws.amazon.com/inspector/>

    </details>

17. How can a company isolate the costs of production and non-production workloads on AWS?
    - A. Create Identity and Access Management (IAM) roles for production and non-production workloads.
    - B. Use different accounts for production and non-production expenses.
    - C. Use Amazon EC2 for non-production workloads and other services for production workloads.
    - D. Use Amazon CloudWatch to monitor the use of services.

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: B

    Explanation: <https://aws.amazon.com/answers/account-management/aws-multi-account-billing-strategy/>

    </details>

18. Where can users find a catalog of AWS-recognized providers of third-party security solutions?
    - A. AWS Service Catalog
    - B. AWS Marketplace
    - C. AWS Quick Start
    - D. AWS CodeDeploy

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: B

    Explanation:
    - AWS Service Catalog Delivery Partners are APN Consulting Partners who help create catalogs of IT services that are approved by the customer's organization for use on AWS.
    - With AWS Service Catalog, customers and partners can centrally manage commonly deployed IT services to help achieve consistent governance and meet compliance requirements while enabling users to self-provision approved services.

    Reference: <https://aws.amazon.com/servicecatalog/partners/>

    </details>

19. A Cloud Practitioner needs to store data for 7 years to meet regulatory requirements. <br/> Which AWS service will meet this requirement at the LOWEST cost?
    - A. Amazon S3
    - B. AWS Snowball
    - C. Amazon Redshift
    - D. Amazon S3 Glacier

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: D

    Explanation:
    - S3 Glacier Deep Archive is Amazon S3's lowest-cost storage class and supports long-term retention and digital preservation for data that may be accessed once or twice in a year.
    - It is designed for customers --particularly those in highly-regulated industries, such as the Financial Services, Healthcare, and Public Sectors -- that retain data sets for 7-10 years or longer to meet regulatory compliance requirements.
    - S3 Glacier Deep Archive can also be used for backup and disaster recovery use cases, and is a cost-effective and easy-to-manage alternative to magnetic tape systems, whether they are on-premises libraries or off-premises services.

    Reference: <https://aws.amazon.com/s3/storage-classes/>

    </details>

20. What are the immediate benefits of using the AWS Cloud? (Choose two.)
    - A. Increased IT staff.
    - B. Capital expenses are replaced with variable expenses.
    - C. User control of infrastructure.
    - D. Increased agility.
    - E. AWS holds responsibility for security in the cloud.

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: CD

    </details>

21. Which security service automatically recognizes and classifies sensitive data or intellectual property on AWS?
    - A. Amazon GuardDuty
    - B. Amazon Macie
    - C. Amazon Inspector
    - D. AWS Shield

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: B

    Explanation:
    - Amazon Macie is a security service that uses machine learning to automatically discover, classify, and protect sensitive data in AWS.
    - Macie recognizes sensitive data such as personally identifiable information (PII) or intellectual property.
    - It provides you with dashboards and alerts that give visibility into how this data is being accessed or moved.

    Reference: <https://docs.aws.amazon.com/macie/latest/userguide/what-is-macie.html>

    </details>

22. What is the purpose of AWS Storage Gateway?
    - A. It ensures on-premises data storage is 99.999999999% durable.
    - B. It transports petabytes of data to and from AWS.
    - C. It connects to multiple Amazon EC2 instances.
    - D. It connects on-premises data storage to the AWS Cloud.

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: D

    Explanation:
    - Moving data to the cloud is not quite as simple as flipping a switch.
    - For companies that have managed their own data centers or server rooms for decades, there are a few steps to consider --and it's not always wise to pull the plug on an internal infrastructure quite so quickly.
    - If a startup uses on-premise business servers and then experiences unexpected growth, abandoning those servers doesn't make sense (even if the long-term plan is to do exactly that).
    - AWS Storage Gateway is a way to bridge this gap for companies of any size.
    - It's a hybrid storage option that connects on-premise storage including age-old tape backup systems to the cloud in a way that also provides one console to access all storage configurations.

    Reference: <https://www.techradar.com/news/what-is-aws-storage-gateway>

    </details>

23. What should users do if they want to install an application in geographically isolated locations?
    - A. Install the application using multiple internet gateways.
    - B. Deploy the application to an Amazon VPC.
    - C. Deploy the application to multiple AWS Regions.
    - D. Configure the application using multiple NAT gateways.

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: C

    Explanation: <https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html>

    </details>

24. A system in the AWS Cloud is designed to withstand the failure of one or more components. <br/> What is this an example of?
    - A. Elasticity
    - B. High Availability
    - C. Scalability
    - D. Agility

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: B

    Explanation: <https://wa.aws.amazon.com/wat.question.REL_7.en.html>

    </details>

25. A Cloud Practitioner needs a consistent and dedicated connection between AWS resources and an on-premises system. <br/> Which AWS service can fulfill this requirement?
    - A. AWS Direct Connect
    - B. AWS VPN
    - C. Amazon Connect
    - D. AWS Data Pipeline

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: A

    Explanation:
    - You can use AWS Direct Connect to establish a private virtual interface from your on-premise network directly to your Amazon VPC, providing you with a private, high bandwidth network connection between your network and your VPC.
    - With multiple virtual interfaces, you can even establish private connectivity to multiple VPCs while maintaining network isolation.

    Reference: <https://aws.amazon.com/directconnect/>

    </details>

26. Within the AWS shared responsibility model, who is responsible for security and compliance?
    - A. The customer is responsible.
    - B. AWS is responsible.
    - C. AWS and the customer share responsibility.
    - D. AWS shares responsibility with the relevant governing body.

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: C

    Explanation:
    - Security and Compliance is a shared responsibility between AWS and the customer.
    - This shared model can help relieve the customer's operational burden as AWS operates, manages and controls the components from the host operating system and virtualization layer down to the physical security of the facilities in which the service operates.

    Reference: <https://aws.amazon.com/compliance/shared-responsibility-model/>

    </details>

27. To use the AWS CLI, users are required to generate:
    - A. a password policy.
    - B. an access/secret key.
    - C. a managed policy.
    - D. an API key.

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: B

    </details>

28. Which AWS service is used to provide encryption for Amazon EBS?
    - A. AWS Certificate Manager
    - B. AWS Systems Manager
    - C. AWS KMS
    - D. AWS Config

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: C

    Explanation: <https://docs.aws.amazon.com/kms/latest/developerguide/services-ebs.html>

    </details>

29. How does AWS charge for AWS Lambda usage once the free tier has been exceeded? (Choose two.)
    - A. By the time it takes for the Lambda function to execute.
    - B. By the number of versions of a specific Lambda function.
    - C. By the number of requests made for a given Lambda function.
    - D. By the programming language that is used for the Lambda function.
    - E. By the total number of Lambda functions in an AWS account.

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: AC

    Explanation: <https://aws.amazon.com/lambda/pricing/>

    </details>

30. Which of the following describes the relationships among AWS Regions, Availability Zones, and edge locations? (Choose two.)
    - A. There are more AWS Regions than Availability Zones.
    - B. There are more edge locations than AWS Regions.
    - C. An edge location is an Availability Zone.
    - D. There are more AWS Regions than edge locations.
    - E. There are more Availability Zones than AWS Regions.

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: BE

    </details>

31. What does AWS Shield Standard provide?
    - A. WAF rules
    - B. DDoS protection
    - C. Identity and Access Management (IAM) permissions and access to resources
    - D. Data encryption

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: B

    Explanation:
    - AWS Shield Standard provides protection for all AWS customers from common, most frequently occurring network and transport layer DDoS attacks that target your web site or application at no additional charge.

    Reference: <https://aws.amazon.com/shield/pricing/>

    </details>

32. A company wants to build its new application workloads in the AWS Cloud instead of using on-premises resources. <br/> What expense can be reduced using the AWS Cloud?
    - A. The cost of writing custom-built Java or Node .js code
    - B. Penetration testing for security
    - C. hardware required to support new applications
    - D. Writing specific test cases for third-party applications.

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: C

    Explanation: <https://aws.amazon.com/pricing/cost-optimization/>

    </details>

33. What does AWS Marketplace allow users to do? (Choose two.)
    - A. Sell unused Amazon EC2 Spot Instances.
    - B. Sell solutions to other AWS users.
    - C. Buy third-party software that runs on AWS.
    - D. Purchase AWS security and compliance documents.
    - E. Order AWS Snowball.

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: BC

    Explanation: <https://aws.amazon.com/marketplace>

    </details>

34. What does it mean if a user deploys a hybrid cloud architecture on AWS?
    - A. All resources run using on-premises infrastructure.
    - B. Some resources run on-premises and some run in a colocation center.
    - C. All resources run in the AWS Cloud.
    - D. Some resources run on-premises and some run in the AWS Cloud.

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: D

    Explanation: <https://aws.amazon.com/hybrid/>

    </details>

35. Which AWS service allows users to identify the changes made to a resource over time?
    - A. Amazon Inspector
    - B. AWS Config
    - C. AWS Service Catalog
    - D. AWS IAM

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: B

    Explanation: <https://docs.aws.amazon.com/config/latest/developerguide/view-manage-resource.html>

    </details>

36. How can a company reduce its Total Cost of Ownership (TCO) using AWS?
    - A. By minimizing large capital expenditures
    - B. By having no responsibility for third-party license costs
    - C. By having no operational expenditures
    - D. By having AWS manage applications

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: A

    Explanation:
    - AWS helps you reduce Total Cost of Ownership (TCO) by reducing the need to invest in large capital expenditures and providing a pay-as-you-go model that empowers you to invest in the capacity you need and use it only when the business requires it.

    Reference: <https://aws.amazon.com/tco-calculator/>

    </details>

37. Which activity is a customer responsibility in the AWS Cloud according to the AWS shared responsibility model?
    - A. Ensuring network connectivity from AWS to the internet
    - B. Patching and fixing flaws within the AWS Cloud infrastructure
    - C. Ensuring the physical security of cloud data centers
    - D. Ensuring Amazon EBS volumes are backed up

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: D

    Explanation: <https://aws.amazon.com/blogs/security/the-aws-shared-responsibility-model-and-gdpr/>

    </details>

38. What are the advantages of the AWS Cloud? (Choose two.)
    - A. Fixed rate monthly cost
    - B. No need to guess capacity requirements
    - C. Increased speed to market
    - D. Increased upfront capital expenditure
    - E. Physical access to cloud data centers

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: BC

    Explanation: <https://data-flair.training/blogs/aws-advantages/>

    </details>

39. When comparing the total cost of ownership (TCO) of an on-premises infrastructure to a cloud architecture, what costs should be considered? (Choose two.)
    - A. The credit card processing fees for application transactions in the cloud.
    - B. The cost of purchasing and installing server hardware in the on-premises data.
    - C. The cost of administering the infrastructure, including operating system and software installations, patches, backups, and recovering from failures.
    - D. The costs of third-party penetration testing.
    - E. The advertising costs associated with an ongoing enterprise-wide campaign.

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: BC

    Explanation: <https://aws.amazon.com/tco-calculator/>

    </details>

40. Which AWS feature allows a company to take advantage of usage tiers for services across multiple member accounts?
    - A. Service control policies (SCPs)
    - B. Consolidated billing
    - C. All Upfront Reserved Instances
    - D. AWS Cost Explorer

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: B

    Explanation: <https://aws.amazon.com/tco-calculator/>

    </details>

41. What is one of the customer's responsibilities according to the AWS shared responsibility model?
    - A. Virtualization infrastructure
    - B. Network infrastructure
    - C. Application security
    - D. Physical security of hardware

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: C

    Explanation: <https://cloudacademy.com/blog/aws-shared-responsibility-model-security/>

    </details>

42. What helps a company provide a lower latency experience to its users globally?
    - A. Using an AWS Region that is central to all users
    - B. Using a second Availability Zone in the AWS Region that is using used
    - C. Enabling caching in the AWS Region that is being used
    - D. Using edge locations to put content closer to all users

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: D

    Explanation: <https://docs.aws.amazon.com/whitepapers/latest/aws-overview/six-advantages-of-cloud-computing.html>

    </details>

43. How can the AWS Cloud increase user workforce productivity after migration from an on-premises data center?
    - A. Users do not have to wait for infrastructure provisioning.
    - B. The AWS Cloud infrastructure is much faster than an on-premises data center infrastructure.
    - C. AWS takes over application configuration management on behalf of users.
    - D. Users do not need to address security and compliance issues.

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: A

    Explanation: <https://d1.awsstatic.com/whitepapers/Migration/aws-migration-whitepaper.pdf>

    </details>

44. Which AWS service provides a quick and automated way to create and manage AWS accounts?
    - A. AWS QuickSight
    - B. Amazon Lightsail
    - C. AWS Organizations
    - D. Amazon Connect

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: C

    Explanation: <https://aws.amazon.com/blogs/mt/automate-account-creation-and-resource-provisioning-using-aws-service-catalog-aws-organizations-and-aws-lambda/>

    </details>

45. Which Amazon RDS feature can be used to achieve high availability?
    - A. Multiple Availability Zones
    - B. Amazon Reserved Instances
    - C. Provisioned IOPS storage
    - D. Enhanced monitoring

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: A

    Explanation:
    - Amazon RDS provides high availability and failover support for DB instances using Multi-AZ deployments.
    - Amazon RDS uses several different technologies to provide failover support.
    - Multi-AZ deployments for Oracle, PostgreSQL, MySQL, and MariaDB DB instances use Amazon's failover technology.
    - SQL Server DB instances use SQL Server Database Mirroring (DBM).

    Reference: <https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.MultiAZ.html>

    </details>

46. Where should users report that AWS resources are being used for malicious purposes?
    - A. AWS Abuse team
    - B. AWS Shield
    - C. AWS Support
    - D. AWS Developer Forums

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: A

    Explanation: <https://aws.amazon.com/premiumsupport/knowledge-center/report-aws-abuse/>

    </details>

47. Which AWS service needs to be enabled to track all user account changes within the AWS Management Console?
    - A. AWS CloudTrail
    - B. Amazon Simple Notification Service (Amazon SNS)
    - C. VPC Flow Logs
    - D. AWS CloudHSM

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: A

    Explanation:
    - AWS CloudTrail is a service that enables governance, compliance, operational auditing, and risk auditing of your AWS account.
    - With CloudTrail, you can log, continuously monitor, and retain account activity related to actions across your AWS infrastructure.
    - CloudTrail provides event history of your AWS account activity, including actions taken through the AWS Management Console, AWS SDKs, command line tools, and other AWS services.
    - This event history simplifies security analysis, resource change tracking, and troubleshooting.
    - In addition, you can use CloudTrail to detect unusual activity in your AWS accounts.
    - These capabilities help simplify operational analysis and troubleshooting.

    Reference: <https://aws.amazon.com/cloudtrail/>

    </details>

48. What is an AWS Cloud design best practice?
    - A. Tight coupling of components
    - B. Single point of failure
    - C. High availability
    - D. Overprovisioning of resources

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: C

    Explanation: <https://d1.awsstatic.com/whitepapers/AWS_Cloud_Best_Practices.pdf>

    </details>

49. Why is AWS more economical than traditional data centers for applications with varying compute workloads?
    - A. Amazon Elastic Compute Cloud (Amazon EC2) costs are billed on a monthly basis.
    - B. Customers retain full administrative access to their Amazon EC2 instances.
    - C. Amazon EC2 instances can be launched on-demand when needed.
    - D. Customers can permanently run enough instances to handle peak workloads.

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: C

    Explanation:
    - The ability to launch instances on-demand when needed allows customers launch and terminate instances in response to a varying workload.
    - This is a more economical practice than purchasing enough on-premises servers to handle the peak load.

    </details>

50. Which AWS service would simplify migration of a database to AWS?
    - A. AWS Storage Gateway
    - B. AWS Database Migration Service (AWS DMS)
    - C. Amazon Elastic Compute Cloud (Amazon EC2)
    - D. Amazon AppStream 2.0

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: B

    Explanation: <https://aws.amazon.com/dms/>

    </details>

