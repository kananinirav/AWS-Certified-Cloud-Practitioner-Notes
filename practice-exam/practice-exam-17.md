---
layout: exam
---

# Practice Exam 17

1. What time-savings advantage is offered with the use of Amazon Rekognition?
    - A. Amazon Rekognition provides automatic watermarking of images.
    - B. Amazon Rekognition provides automatic detection of objects appearing in pictures.
    - C. Amazon Rekognition provides the ability to resize millions of images automatically.
    - D. Amazon Rekognition uses Amazon Mechanical Turk to allow humans to bid on object detection jobs.

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: B

    Explanation:
    - Rekognition Image is an image recognition service that detects objects, scenes, and faces; extracts text; recognizes celebrities; and identifies inappropriate content in images.
    - It also allows you to search and compare faces.
    - Rekognition Image is based on the same proven, highly scalable, deep learning technology developed by Amazon's computer vision scientists to analyze billions of images daily for Prime Photos.

    Reference: <https://aws.amazon.com/rekognition/faqs/>

    </details>

2. When comparing AWS with on-premises Total Cost of Ownership (TCO), what costs are included?
    - A. Data center security
    - B. Business analysis
    - C. Project management
    - D. Operating system administration

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: A

    Explanation: <https://www.awstcocalculator.com/Output/Load/f85bbf7e131446643911859504>

    </details>

3. According to the AWS shared responsibility model, what is AWS responsible for?
    - A. Configuring Amazon VPC
    - B. Managing application code
    - C. Maintaining application traffic
    - D. Managing the network infrastructure

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: D

    Explanation: <https://cloudacademy.com/blog/aws-shared-responsibility-model-security/>

    </details>

4. Which service should be used to estimate the costs of running a new project on AWS?
    - A. AWS TCO Calculator
    - B. AWS Simple Monthly Calculator
    - C. AWS Cost Explorer API
    - D. AWS Budgets

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: C

    Explanation:
    - To forecast your costs, use the AWS Cost Explorer.
    - Use cost allocation tags to divide your resources into groups, and then estimate the costs for each group.

    Reference: <https://aws.amazon.com/premiumsupport/knowledge-center/estimating-aws-resource-costs/>

    </details>

5. Which AWS tool will identify security groups that grant unrestricted Internet access to a limited list of ports?
    - A. AWS Organizations
    - B. AWS Trusted Advisor
    - C. AWS Usage Report
    - D. Amazon EC2 dashboard

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: B

    Explanation: <https://www.cloudconformity.com/knowledge-base/aws/EC2/security-group-egress-any.html>

    </details>

6. Which AWS service can be used to generate alerts based on an estimated monthly bill?
    - A. AWS Config
    - B. Amazon CloudWatch
    - C. AWS X-Ray
    - D. AWS CloudTrail

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: B

    Explanation:
    - You can monitor your estimated AWS charges by using Amazon CloudWatch.
    - When you enable the monitoring of estimated charges for your AWS account, the estimated charges are calculated and sent several times daily to CloudWatch as metric data.
    - Billing metric data is stored in the US East (N. Virginia) Region and represents worldwide charges.
    - This data includes the estimated charges for every service in AWS that you use, in addition to the estimated overall total of your AWS charges.

    Reference: <https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/monitor_estimated_charges_with_cloudwatch.html>

    </details>

7. Which Amazon EC2 pricing model offers the MOST significant discount when compared to On-Demand Instances?
    - A. Partial Upfront Reserved Instances for a 1-year term
    - B. All Upfront Reserved Instances for a 1-year term
    - C. All Upfront Reserved Instances for a 3-year term
    - D. No Upfront Reserved Instances for a 3-year term

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: C

    Explanation: <https://aws.amazon.com/ec2/pricing/reserved-instances/>

    </details>

8. Which of the following is the responsibility of AWS?
    - A. Setting up AWS Identity and Access Management (IAM) users and groups
    - B. Physically destroying storage media at end of life
    - C. Patching guest operating systems
    - D. Configuring security settings on Amazon EC2 instances

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: B

    Explanation:
    - Media storage devices used to store customer data are classified by AWS as Critical and treated accordingly, as high impact, throughout their life-cycles.
    - AWS has exacting standards on how to install, service, and eventually destroy the devices when they are no longer useful. - When a storage device has reached the end of its useful life, AWS decommissions media using techniques detailed in NIST 800-88.
    - Media that stored customer data is not removed from AWS control until it has been securely decommissioned.

    Reference: <https://aws.amazon.com/compliance/data-center/controls/>

    </details>

9. Which of the following is an advantage of using AWS?
    - A. AWS audits user data.
    - B. Data is automatically secure.
    - C. There is no guessing on capacity needs.
    - D. AWS manages compliance needs.

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: C

    Explanation:
    - AWS allows you to access as much or as little capacity as you need, and scale up or down as required with only a few minutes’ notice

    Reference: <https://docs.aws.amazon.com/whitepapers/latest/aws-overview/six-advantages-of-cloud-computing.html>

    </details>

10. Which AWS service would a customer use with a static website to achieve lower latency and high transfer speeds?
    - A. AWS Lambda
    - B. Amazon DynamoDB Accelerator
    - C. Amazon Route 53
    - D. Amazon CloudFront

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: D

    Explanation:
    - Amazon CloudFront is a fast content delivery network (CDN) service that securely delivers data, videos, applications, and APIs to customers globally with low latency, high transfer speeds, all within a developer- friendly environment.
    - CloudFront is integrated with AWS both physical locations that are directly connected to the AWS global infrastructure, as well as other AWS services.

    Reference: <https://aws.amazon.com/cloudfront/>

    </details>

11. Which services manage and automate application deployments on AWS? (Choose two.)
    - A. AWS Elastic Beanstalk
    - B. AWS CodeCommit
    - C. AWS Data Pipeline
    - D. AWS CloudFormation
    - E. AWS Config

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: AD

    Explanation:
    - EBS -> automates deploying code and provisioning infrastructure
    - CloudFormation -> Use templates to deploy code and infrastructure

    </details>

12. A user wants guidance on possible savings when migrating from on-premises to AWS. <br/> Which tool is suitable for this scenario?
    - A. AWS Budgets
    - B. Cost Explorer
    - C. AWS Total Cost of Ownership (TCO) Calculator
    - D. AWS Well-Architected Tool

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: C

    Explanation:
    - The TCO Calculator provides directional guidance on possible realized savings when deploying AWS.
    - This tool is built on an underlying calculation model, that generates a fair assessment of value that a customer may achieve given the data provided by the user.

    Reference: <https://aws.amazon.com/tco-calculator/>

    </details>

13. Which principles are used to architect applications for reliability on the AWS Cloud? (Choose two.)
    - A. Design for automated failure recovery
    - B. Use multiple Availability Zones
    - C. Manage changes via documented processes
    - D. Test for moderate demand to ensure reliability
    - E. Backup recovery to an on-premises environment

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: AB

    Explanation: <https://aws.amazon.com/blogs/apn/the-5-pillars-of-the-aws-well-architected-framework/>

    </details>

14. What tasks should a customer perform when that customer suspects an AWS account has been compromised? (Choose two.)
    - A. Rotate passwords and access keys.
    - B. Remove MFA tokens.
    - C. Move resources to a different AWS Region.
    - D. Delete AWS CloudTrail Resources.
    - E. Contact AWS Support.

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: AE

    Explanation: <https://aws.amazon.com/premiumsupport/knowledge-center/potential-account-compromise/>

    </details>

15. What is an example of high availability in the AWS Cloud?
    - A. Consulting AWS technical support at any time day or night
    - B. Ensuring an application remains accessible, even if a resource fails
    - C. Making any AWS service available for use by paying on demand
    - D. Deploying in any part of the world using AWS Regions

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: B

    Explanation: <https://aws.amazon.com/blogs/startups/high-availability-for-mere-mortals/>

    </details>

16. Which AWS security service protects applications from distributed denial of service attacks with always-on detection and automatic inline mitigations?
    - A. Amazon Inspector
    - B. AWS Web Application Firewall (AWS WAF)
    - C. Elastic Load Balancing (ELB)
    - D. AWS Shield

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: D

    Explanation:
    - AWS Shield is a managed Distributed Denial of Service (DDoS) protection service that safeguards applications running on AWS.
    - AWS Shield provides always-on detection and automatic inline mitigation's that minimize application downtime and latency, so there is no need to engage AWS Support to benefit from DDoS protection.
    - There are two tiers of AWS Shield - Standard and Advanced.

    Reference: <https://aws.amazon.com/shield/>

    </details>

17. A company wants to monitor the CPU usage of its Amazon EC2 resources. <br/> Which AWS service should the company use?
    - A. AWS CloudTrail
    - B. Amazon CloudWatch
    - C. AWS Cost and Usage report
    - D. Amazon Simple Notification Service (Amazon SNS)

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: B

    Explanation:
    - With Basic monitoring you get data on your cloudwatch metrics every 5 minutes.
    - Enabling detailed monitoring, you will get the data every one minute.
    - To check if detailed monitoring is enabled, on your EC2 Console, Select the instance, on the lower plane, Select Monitoring.

    Reference: <https://forums.aws.amazon.com/thread.jspa?threadID=263876>

    </details>

18. What is an AWS Identity and Access Management (IAM) role?
    - A. A user associated with an AWS resource
    - B. A group associated with an AWS resource
    - C. An entity that defines a set of permissions for use with an AWS resource
    - D. An authentication credential associated with a multi-factor authentication (MFA) token

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: C

    Explanation:
    - AWS Identity and Access Management (IAM) enables you to manage access to AWS services and resources securely.
    - Using IAM, you can create and manage AWS users and groups, and use permissions to allow and deny their access to AWS resources.

    Reference: <https://aws.amazon.com/iam/>

    </details>

19. What are the advantages of Reserved Instances? (Choose two.)
    - A. They provide a discount over on-demand pricing.
    - B. They provide access to additional instance types.
    - C. They provide additional networking capability.
    - D. Customers can upgrade instances as new types become available.
    - E. Customers can reserve capacity in an Availability Zone.

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: AE

    Explanation: <https://aws.amazon.com/premiumsupport/knowledge-center/ec2-ri-basics/>

    </details>

20. How do Amazon EC2 Auto Scaling groups help achieve high availability for a web application?
    - A. They automatically add more instances across multiple AWS Regions based on global demand of the application.
    - B. They automatically add or replace instances across multiple Availability Zones when the application needs it.
    - C. They enable the application's static content to reside closer to end users.
    - D. They are able to distribute incoming requests across a tier of web server instances.

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: B

    Explanation:
    - When the unhealthy Availability Zone returns to a healthy state, Auto Scaling automatically redistributes the application instances evenly across all of the designated Availability Zones.

    Reference: <https://docs.aws.amazon.com/autoscaling/ec2/userguide/auto-scaling-benefits.html>

    </details>

21. How can one AWS account use Reserved Instances from another AWS account?
    - A. By using Amazon EC2 Dedicated Instances
    - B. By using AWS Organizations consolidated billing
    - C. By using the AWS Cost Explorer tool
    - D. By using AWS Budgets

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: B

    Explanation:
    - The account that originally purchased the Reserved Instance receives the discount first.
    - If the purchasing account doesn't have any instances that match the terms of the Reserved Instance, the discount for the Reserved Instance is assigned to any matching usage on another account in the organization.

    Reference: <https://aws.amazon.com/premiumsupport/knowledge-center/ec2-ri-consolidated-billing/>

    </details>

22. A customer runs an On-Demand Amazon Linux EC2 instance for 3 hours, 5 minutes, and 6 seconds. <br/> For how much time will the customer be billed?
    - A. 3 hours, 5 minutes
    - B. 3 hours, 5 minutes, and 6 seconds
    - C. 3 hours, 6 minutes
    - D. 4 hours

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: B

    Explanation: <https://aws.amazon.com/premiumsupport/knowledge-center/ec2-instance-hour-billing/>

    </details>

23. Which of the following AWS services provide compute resources? (Choose two.)
    - A. AWS Lambda
    - B. Amazon Elastic Container Service (Amazon ECS)
    - C. AWS CodeDeploy
    - D. Amazon Glacier
    - E. AWS Organizations

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: AB

    Explanation: <https://docs.aws.amazon.com/whitepapers/latest/aws-overview/compute-services.html>

    </details>

24. Which AWS service enables users to deploy infrastructure as code by automating the process of provisioning resources?
    - A. Amazon GameLift
    - B. AWS CloudFormation
    - C. AWS Data Pipeline
    - D. AWS Glue

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: B

    Explanation:
    - AWS CloudFormation provides a common language for you to model and provision AWS and third party application resources in your cloud environment.
    - AWS CloudFormation allows you to use programming languages or a simple text file to model and provision, in an automated and secure manner, all the resources needed for your applications across all regions and accounts.
    - This gives you a single source of truth for your AWS and third party resources.

    Reference: <https://aws.amazon.com/cloudformation/>

    </details>

25. Which AWS services provide a way to extend an on-premises architecture to the AWS Cloud? (Choose two.)
    - A. Amazon EBS
    - B. AWS Direct Connect
    - C. Amazon CloudFront
    - D. AWS Storage Gateway
    - E. Amazon Connect

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: BD

    Explanation: <https://aws.amazon.com/hybrid/>

    </details>

26. Which of the following allows users to provision a dedicated network connection from their internal network to AWS?
    - A. AWS CloudHSM
    - B. AWS Direct Connect
    - C. AWS VPN
    - D. Amazon Connect

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: B

    Explanation:
    - AWS Direct Connect lets you establish a dedicated network connection between your network and one of the AWS Direct Connect locations.
    - Using industry standard 802.1q VLANs, this dedicated connection can be partitioned into multiple virtual interfaces.
    - This allows you to use the same connection to access public resources such as objects stored in Amazon S3 using public IP address space, and private resources such as Amazon EC2 instances running within an Amazon Virtual Private Cloud (VPC) using private IP space, while maintaining network separation between the public and private environments.
    - Virtual interfaces can be reconfigured at any time to meet your changing needs.

    Reference: <https://aws.amazon.com/directconnect/>

    </details>

27. Which services use AWS edge locations? (Choose two.)
    - A. Amazon CloudFront
    - B. AWS Shield
    - C. Amazon EC2
    - D. Amazon RDS
    - E. Amazon ElastiCache

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: A,B

    Explanation: <https://www.edureka.co/community/600/what-is-an-edge-location-in-aws>

    </details>

28. Which service would provide network connectivity in a hybrid architecture that includes the AWS Cloud?
    - A. Amazon VPC
    - B. AWS Direct Connect
    - C. AWS Directory Service
    - D. Amazon API Gateway

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: A

    Explanation:
    - Amazon Virtual Private Cloud (Amazon VPC) is a logically isolated, private section of the AWS Cloud to launch resources in a virtual data center in the cloud.
    - Amazon VPC allows you to leverage multiple Availability Zones (AZ) within a region so that you can build greater fault tolerance within your workloads.
    - You have complete control.

    Reference: <https://aws.amazon.com/blogs/publicsector/aws-networking-capabilities-gives-you-choices-for-hybrid-cloud-connectivity-but-which-service-works-best-for-your-use-case/>

    </details>

29. Which tool can be used to compare the costs of running a web application in a traditional hosting environment to running it on AWS?
    - A. AWS Cost Explorer
    - B. AWS Budgets
    - C. AWS Cost and Usage report
    - D. AWS Total Cost of Ownership (TCO) Calculator

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: D

    Explanation: <https://aws.amazon.com/tco-calculator/>

    </details>

30. What is the value of using third-party software from AWS Marketplace instead of installing third-party software on Amazon EC2? (Choose two.)
    - A. Users pay for software by the hour or month depending on licensing.
    - B. AWS Marketplace enables the user to launch applications with 1-Click.
    - C. AWS Marketplace data encryption is managed by a third-party vendor.
    - D. AWS Marketplace eliminates the need to upgrade to newer software versions.
    - E. Users can deploy third-party software without testing.

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: AB

    Explanation: <https://aws.amazon.com/partners/aws-marketplace/>

    </details>

31. Which of the following is a cloud architectural design principle?
    - A. Scale up, not out.
    - B. Loosely couple components.
    - C. Build monolithic systems.
    - D. Use commercial database software.

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: B

    Explanation:
    - Loosely coupled architectures reduce interdependencies, so that a change or failure in a component does not cascade to other components.

    </details>

32. Under the shared responsibility model; which of the following areas are the customer's responsibility? (Choose two.)
    - A. Firmware upgrades of network infrastructure
    - B. Patching of operating systems
    - C. Patching of the underlying hypervisor
    - D. Physical security of data centers
    - E. Configuration of the security group

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: BE

    Explanation: <https://aws.amazon.com/compliance/shared-responsibility-model/>

    </details>

33. Which service enables customers to audit and monitor changes in AWS resources?
    - A. AWS Trusted Advisor
    - B. Amazon GuardDuty
    - C. Amazon Inspector
    - D. AWS Config

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: D

    Explanation:
    - AWS Config is a service that enables you to assess, audit, and evaluate the configurations of your AWS resources.
    - Config continuously monitors and records your AWS resource configurations and allows you to automate the evaluation of recorded configurations against desired configurations.
    - With Config, you can review changes in configurations and relationships between AWS resources, dive into detailed resource configuration histories, and determine your overall compliance against the configurations specified in your internal guidelines.
    - This enables you to simplify compliance auditing, security analysis, change management, and operational troubleshooting.

    Reference: <https://aws.amazon.com/config/>

    </details>

34. Which AWS service identifies security groups that allow unrestricted access to a user's AWS resources?
    - A. AWS CloudTrail
    - B. AWS Trusted Advisor
    - C. Amazon CloudWatch
    - D. Amazon Inspector

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: B

    </details>

35. According to the AWS shared responsibility model, who is responsible for configuration management?
    - A. It is solely the responsibility of the customer.
    - B. It is solely the responsibility of AWS.
    - C. It is shared between AWS and the customer.
    - D. It is not part of the AWS shared responsibility model.

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: C

    Explanation:
    - AWS maintains the configuration of its infrastructure devices, but a customer is responsible for configuring their own guest operating systems, databases, and applications.

    Reference: <https://aws.amazon.com/compliance/shared-responsibility-model/>

    </details>

36. Which AWS service is a content delivery network that securely delivers data, video, and applications to users globally with low latency and high speeds?
    - A. AWS CloudFormation
    - B. AWS Direct Connect
    - C. Amazon CloudFront
    - D. Amazon Pinpoint

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: C

    Explanation:
    - Amazon CloudFront is a fast content delivery network (CDN) service that securely delivers data, videos, applications, and APIs to customers globally with low latency, high transfer speeds, all within a developer- friendly environment.
    - CloudFront is integrated with AWS both physical locations that are directly connected to the AWS global infrastructure, as well as other AWS services.

    Reference: <https://aws.amazon.com/cloudfront/>

    </details>

37. Which benefit of the AWS Cloud supports matching the supply of resources with changing workload demands?
    - A. Security
    - B. Reliability
    - C. Elasticity
    - D. High availability

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: C

    Explanation: <https://wa.aws.amazon.com/wat.map.en.html>

    </details>

38. A user is running an application on AWS and notices that one or more AWS-owned IP addresses is involved in a distributed denial-of-service (DDoS) attack. <br/> Who should the user contact FIRST about this situation?
    - A. AWS Premium Support
    - B. AWS Technical Account Manager
    - C. AWS Solutions Architect
    - D. AWS Abuse team

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: D

    Explanation: <https://aws.amazon.com/premiumsupport/knowledge-center/report-aws-abuse/>

    </details>

39. Which of the following are benefits of hosting infrastructure in the AWS Cloud? (Choose two.)
    - A. There are no upfront commitments.
    - B. AWS manages all security in the cloud.
    - C. Users have the ability to provision resources on demand.
    - D. Users have access to free and unlimited storage.
    - E. Users have control over the physical infrastructure.

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: AC

    </details>

40. What AWS service would be used to centrally manage AWS access policies across multiple accounts?
    - A. AWS Service Catalog
    - B. AWS Config
    - C. AWS Trusted Advisor
    - D. AWS Organizations

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: D

    Explanation:
    - AWS Organizations helps you centrally govern your environment as you grow and scale your workloads on AWS.
    - Whether you are a growing startup or a large enterprise, Organizations helps you to centrally manage billing; control access, compliance, and security; and share resources across your AWS accounts.

    Reference: <https://aws.amazon.com/organizations/>

    </details>

41. What is AWS Trusted Advisor?
    - A. It is an AWS staff member who provides recommendations and best practices on how to use AWS.
    - B. It is a network of AWS partners who provide recommendations and best practices on how to use AWS.
    - C. It is an online tool with a set of automated checks that provides recommendations on cost optimization, performance, and security.
    - D. It is another name for AWS Technical Account Managers who provide recommendations on cost optimization, performance, and security.

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: C

    Explanation:
    - AWS Trusted Advisor is an online tool that provides you real time guidance to help you provision your resources following AWS best practices.
    - Whether establishing new workflows, developing applications, or as part of ongoing improvement, take advantage of the recommendations provided by Trusted Advisor on a regular basis to help keep your solutions provisioned optimally.

    Reference: <https://aws.amazon.com/premiumsupport/technology/trusted-advisor/>

    </details>

42. Which AWS service or feature allows a company to visualize, understand, and manage AWS costs and usage over time?
    - A. AWS Budgets
    - B. AWS Cost Explorer
    - C. AWS Organizations
    - D. Consolidated billing

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: B

    Explanation:
    - AWS Cost Explorer has an easy-to-use interface that lets you visualize, understand, and manage your AWS costs and usage over time.

    Reference: <https://aws.amazon.com/aws-cost-management/aws-cost-explorer/>

    </details>

43. Which AWS service offers on-demand access to AWS security and compliance reports?
    - A. AWS CloudTrail
    - B. AWS Artifact
    - C. AWS Health
    - D. Amazon CloudWatch

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: B

    Explanation:
    - AWS Artifact is your go-to, central resource for compliance-related information that matters to you.
    - It provides on-demand access to AWS' security and compliance reports and select online agreements.
    - Reports available in AWS Artifact include our Service Organization Control (SOC) reports, Payment Card Industry (PCI) reports, and certifications from accreditation bodies across geographies and compliance verticals that validate the implementation and operating effectiveness of AWS security controls.
    - Agreements available in AWS Artifact include the Business Associate Addendum (BAA) and the Nondisclosure Agreement (NDA).

    Reference: <https://aws.amazon.com/artifact/>

    </details>

44. What are the benefits of using the AWS Cloud for companies with customers in many countries around the world? (Choose two.)
    - A. Companies can deploy applications in multiple AWS Regions to reduce latency.
    - B. Amazon Translate automatically translates third-party website interfaces into multiple languages.
    - C. Amazon CloudFront has multiple edge locations around the world to reduce latency.
    - D. Amazon Comprehend allows users to build applications that can respond to user requests in many languages.
    - E. Elastic Load Balancing can distribute application web traffic to multiple AWS Regions around the world, which reduces latency.

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: AC

    Explanation:
    - <https://aws.amazon.com/cloudfront/>

    </details>

45. Which AWS service handles the deployment details of capacity provisioning, load balancing, Auto Scaling, and application health monitoring?
    - A. AWS Config
    - B. AWS Elastic Beanstalk
    - C. Amazon Route 53
    - D. Amazon CloudFront

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: B

    Explanation:
    - Upload your code and Elastic Beanstalk automatically handles the deployment, from capacity provisioning, load balancing, auto-scaling to application health monitoring.
    - At the same time, you retain full control over the AWS resources powering your application and can access the underlying resources at any time.

    Reference: <https://aws.amazon.com/elasticbeanstalk/>

    </details>

46. Which AWS service provides inbound and outbound network ACLs to harden external connectivity to Amazon EC2?
    - A. AWS IAM
    - B. Amazon Connect
    - C. Amazon VPC
    - D. Amazon API Gateway

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: C

    Explanation: <https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Security.html>

    </details>

47. When a company provisions web servers in multiple AWS Regions, what is being increased?
    - A. Coupling
    - B. Availability
    - C. Security
    - D. Durability

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: B

    Explanation: <https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html>

    </details>

48. The pay-as-you-go pricing model for AWS services:
    - A. reduces capital expenditures.
    - B. requires payment up front for AWS services.
    - C. is relevant only for Amazon EC2, Amazon S3, and Amazon RDS.
    - D. reduces operational expenditures.

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: A

    Explanation: <https://www.10thmagnitude.com/opex-vs-capex-the-real-cloud-computing-cost-advantage/>

    </details>

49. Under the AWS shared responsibility model, AWS is responsible for which security-related task?
    - A. Lifecycle management of IAM credentials
    - B. Physical security of global infrastructure
    - C. Encryption of Amazon EBS volumes
    - D. Firewall configuration

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: B

    Explanation: <https://cloudacademy.com/blog/aws-shared-responsibility-model-security/>

    </details>

50. Which AWS service enables users to consolidate billing across multiple accounts?
    - A. Amazon QuickSight
    - B. AWS Organizations
    - C. AWS Budgets
    - D. Amazon Forecast

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: B

    Explanation:
    - You can use the consolidated billing feature in AWS Organizations to consolidate billing and payment for multiple AWS accounts or multiple Amazon Internet Services Pvt. Ltd (AISPL) accounts.
    - Every organization in AWS Organizations has a master (payer) account that pays the charges of all the member (linked)
    accounts.

    Reference: <https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/consolidated-billing.html>

    </details>

