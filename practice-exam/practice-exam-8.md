---
layout: exam
---

# Practice Exam 8

1. What is the main benefit of attaching security groups to an Amazon RDS instance?
    - A. Manages user access and encryption keys.
    - B. Controls what IP address ranges can connect to your database instance.
    - C. Deploys SSL/TLS certificates for use with your database instance.
    - D. Distributes incoming traffic across multiple targets.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: B
    </details>

2. A company wants to use Amazon Elastic Container Service (Amazon ECS) to run its containerized applications. For compliance reasons, the company wants to retain complete visibility and control over the underlying server cluster. Which Amazon ECS launch type will satisfy these requirements?
    - A. EC2 launch type.
    - B. Fargate launch type.
    - C. Lightsail launch type.
    - D. Lambda launch type.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A
    </details>

3. You have multiple standalone AWS accounts and you want to decrease your AWS monthly charges. What should you do?
    - A. Try to remove unnecessary AWS accounts.
    - B. Add the accounts to an AWS Organization and use Consolidated Billing.
    - C. Track the AWS charges that are incurred by the member accounts.
    - D. Enable AWS tiered-pricing before provisioning resources.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: B
    </details>

4. You have been tasked with auditing the security of your VPC. As part of this process, you need to start by analyzing what inbound and outbound traffic is allowed on your EC2 instances. What two parts of the VPC do you need to check to accomplish this task?
    - A. Network ACLs and Traffic Manager.
    - B. Network ACLs and Subnets.
    - C. Security Groups and Internet Gateways.
    - D. Security Groups and Network ACLs.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: D
    </details>

5. What does the AWS "Business" support plan provide? (Choose TWO)
    - A. Access to the full set of Trusted Advisor checks.
    - B. Support Concierge Service.
    - C. Less than 15 minutes response-time support if your business critical system goes down.
    - D. AWS Support API.
    - E. Proactive Technical Account Management.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A, D
    </details>

6. You have just finished writing your application code. Which service can be used to automate the deployment and scaling of your application?
    - A. Amazon Simple Storage Service.
    - B. AWS Elastic Beanstalk.
    - C. AWS CodeCommit.
    - D. Amazon Elastic File System.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: B
    </details>

7. Which statement is true in relation to security in AWS?
    - A. AWS manages everything related to EC2 operating systems.
    - B. AWS customers are responsible for patching any database software running on Amazon EC2.
    - C. Server side encryption is the responsibility of AWS.
    - D. AWS is responsible for the security of your application.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: B
    </details>

8. Amazon EC2 instances are conceptually very similar to traditional servers. However, using Amazon EC2 server instances in the same manner as traditional hardware server instances is only a starting point. What are the main benefits of using the AWS EC2 instances instead of traditional servers? (Choose TWO)
    - A. Improves Fault-Tolerance.
    - B. Provides your business with a seamless remote accessibility.
    - C. Prevents unauthorized users from getting into your network.
    - D. Provides automatic data backups.
    - E. Can be scaled manually in a shorter period of time.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A, E
    </details>

9. Which statement is true regarding AWS pricing? (Choose TWO)
    - A. With the AWS pay-as-you-go pricing model, you don't have to pay any upfront fee.
    - B. You have no responsibility for third-party software license costs.
    - C. You only pay for the individual services that you need with no long-term contracts.
    - D. For some services, you have to pay a startup fee in order to get the service running.
    - E. There are no reservations on AWS, you only pay for what you use.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A, C
    </details>

10. Which AWS service provides the EASIEST way to set up and manage a secure, well-architected, multi-account AWS environment?
    - A. AWS Control Tower.
    - B. Amazon Macie.
    - C. AWS Systems Manager Patch Manager.
    - D. AWS Security Hub.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A
    </details>

11. A company is running a large web application that needs to always be available. The application tends to slow down when CPU usage is greater than 60%. How can they track when CPU usage goes above 60% for any of the EC2 Instances in their account?
    - A. Use CloudFront to monitor the CPU usage.
    - B. Set the AWS Config CPU threshold to 60% to receive a notification when EC2 usage exceeds that value.
    - C. Use CloudWatch Alarms to monitor the CPU and alert when the CPU usage is >= 60%.
    - D. Use SNS to monitor the utilization of the server.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: C
    </details>

12. What is the recommended storage option when hosting an often-changing database on an Amazon EC2 instance?
    - A. Amazon EBS.
    - B. Amazon RDS.
    - C. You can't run a database inside an Amazon EC2 instance.
    - D. Amazon DynamoDB.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A
    </details>

13. You are working as a site reliability engineer (SRE) in an AWS environment, which of the following services helps monitor your applications?
    - A. Amazon CloudWatch.
    - B. Amazon CloudSearch.
    - C. Amazon Elastic MapReduce.
    - D. Amazon CloudHSM.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A
    </details>

14. What factors determine how you are charged when using AWS Lambda? (Choose TWO)
    - A. Storage consumed.
    - B. Number of requests to your functions.
    - C. Number of volumes.
    - D. Placement groups.
    - E. Compute time consumed.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: B, E
    </details>

15. What are the main differences between an IAM user and an IAM role in AWS? (Choose TWO)
    - A. An IAM user is uniquely associated with only one person, however a role is intended to be assumable by anyone who needs it.
    - B. An IAM user has permanent credentials associated with it, however a role has temporary credentials associated with it.
    - C. IAM users are more cost effective than IAM roles.
    - D. A role is uniquely associated with only one person, however an IAM user is intended to be assumable by anyone who needs it.
    - E. An IAM user has temporary credentials associated with it, however a role has permanent credentials associated with it.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A, B
    </details>

16. Which of the following actions may reduce Amazon EBS costs? (Choose TWO)
    - A. Deleting unused buckets.
    - B. Using reservations.
    - C. Deleting unnecessary snapshots.
    - D. Changing the type of the volume.
    - E. Distributing requests to multiple volumes.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: C, D
    </details>

17. What does Amazon GuardDuty do to protect AWS accounts and workloads?
    - A. Notifies AWS customers about abuse events once they are reported.
    - B. Continuously monitors AWS infrastructure and helps detect threats such as attacker reconnaissance or account compromise.
    - C. Helps AWS customers identify the root cause of potential security issues.
    - D. Checks security groups for rules that allow unrestricted access to AWS. resources.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: B
    </details>

18. Which database service should you use if your application and data schema require "joins" or complex transactions?
    - A. Amazon RDS.
    - B. AWS Outposts.
    - C. Amazon DocumentDB.
    - D. Amazon DynamoDB.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A
    </details>

19. Which of the following makes it easier for you to categorize, manage and filter your resources?
    - A. Amazon CloudWatch.
    - B. AWS Service Catalog.
    - C. AWS Directory Service.
    - D. AWS Tagging.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: D
    </details>

20. What should you consider when storing data in Amazon Glacier?
    - A. Amazon Glacier only accepts data in a compressed format.
    - B. Glacier can only be used to store frequently accessed data and data archives.
    - C. Amazon Glacier does not provide immediate retrieval of data.
    - D. Attach Glacier to an EC2 Instance to be able to store data.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: C
    </details>

21. Engineers are wasting a lot of time and effort managing batch computing software in traditional data centers. Which of the following AWS services allows them to easily run thousands of batch computing jobs?
    - A. Amazon EC2.
    - B. AWS Batch.
    - C. Lambda@Edge.
    - D. AWS Fargate.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: B
    </details>

22. How can you increase your application’s fault-tolerance while it is being hosted in AWS?
    - A. Deploy your application across multiple EC2 instances.
    - B. Deploy your application across multiple Availability Zones.
    - C. Host your application on one powerful EC2 instance type instead of multiple smaller instances.
    - D. Deploy the underlying application resources across multiple subnets.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: B
    </details>

23. Which of the following AWS Support Plans gives you 24/7 access to Cloud Support Engineers via email & phone? (Choose TWO)
    - A. Developer.
    - B. Premium.
    - C. Enterprise.
    - D. Standard.
    - E. Business.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: C, E
    </details>

24. Which of the following requires an access key ID and a secret access key to get long-lived programmatic access to AWS resources? (Choose TWO)
    - A. IAM group.
    - B. IAM user.
    - C. IAM role.
    - D. AWS account root user.
    - E. TAM.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: B, D
    </details>

25. Which of the following is a benefit of the "Loose Coupling" architecture principle?
    - A. It eliminates the need for change management.
    - B. It allows for Cross-Region Replication.
    - C. It helps AWS customers reduce Privileged Access to AWS resources.
    - D. It allows individual application components or services to be modified without affecting other components.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: D
    </details>

26. A company needs to host a big data application on AWS using EC2 instances. Which of the following AWS Storage services would they choose to automatically get high throughput to multiple compute nodes?
    - A. Amazon Elastic Block Store.
    - B. AWS Storage Gateway.
    - C. Amazon Elastic File System.
    - D. S3.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: C
    </details>

27. Which of the following Cloud Computing deployment models eliminates the need to run and maintain physical data centers?
    - A. On-premises.
    - B. IaaS.
    - C. PaaS.
    - D. Cloud.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: D
    </details>

28. What are the benefits of the AWS Marketplace service? (Choose TWO)
    - A. Protects customers by performing periodic security checks on listed products.
    - B. Per-second billing.
    - C. Provides cheaper options for purchasing Amazon EC2 on-demand instances.
    - D. Provides flexible pricing options that suit most customer needs.
    - E. Provides software solutions that run on AWS or any other Cloud vendor.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: D, E
    </details>

29. What is the benefit of Amazon EBS volumes being automatically replicated within the same availability zone?
    - A. Elasticity.
    - B. Durability.
    - C. Traceability.
    - D. Accessibility.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: B
    </details>

30. You are planning to launch an advertising campaign over the coming weekend to promote a new digital product. It is expected that there will be heavy spikes in load during the campaign period, and you can’t afford any downtime. You need additional compute resources to handle the additional load. What is the most cost-effective EC2 instance purchasing option for this job?
    - A. Savings Plans.
    - B. Spot Instances.
    - C. Reserved Instances.
    - D. On-Demand Instances.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: D
    </details>

31. Which of the following AWS services integrates with AWS Shield and AWS Web Application Firewall (AWS WAF) to protect against network and application layer DDoS attacks?
    - A. Amazon EFS.
    - B. AWS Secrets Manager.
    - C. AWS Systems Manager.
    - D. Amazon CloudFront.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: D
    </details>

32. Which of the following services is used when encrypting EBS volumes?
    - A. AWS WAF.
    - B. AWS KMS.
    - C. Amazon Macie.
    - D. Amazon GuardDuty.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: B
    </details>

33. The AWS account administrator of your company has been fired. With the permissions granted to him as an administrator, he was able to create multiple IAM user accounts and access keys. Additionally, you are not sure whether he has access to the AWS root account or not. What should you do immediately to protect your AWS infrastructure? (Choose TWO)
    - A. Download all the attached policies in a safe place.
    - B. Delete all IAM accounts and recreate them.
    - C. Use the CloudWatch service to check all API calls that have been made in your account since the administrator was fired.
    - D. Rotate all access keys.
    - E. Change the email address and password of the root user account and enable MFA.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: D, E
    </details>

34. What is the Amazon ElastiCache service used for? (Choose TWO)
    - A. Provide an in-memory data storage service.
    - B. Reduce delivery costs using Edge Locations.
    - C. Improve web application performance.
    - D. Provide a Chef-compatible cache to speed up application response.
    - E. Distribute requests to multiple instances.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A, C
    </details>

35. The elasticity of the AWS Cloud enables customers to save costs when compared to traditional hosting providers. What can AWS customers do to benefit from the elasticity of the AWS Cloud? (Choose TWO)
    - A. Deploy your resources across multiple Availability Zones.
    - B. Use Amazon EC2 Auto Scaling.
    - C. Deploy your resources in another region.
    - D. Use Elastic Load Balancing.
    - E. Use Serverless Computing whenever possible.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: B, E
    </details>

36. What are some of the benefits of using On-Demand EC2 instances? (Choose TWO)
    - A. They provide free capacity when testing your new applications.
    - B. They are cheaper than all other EC2 options.
    - C. They remove the need to buy “safety net” capacity to handle periodic traffic spikes.
    - D. They only require 1-2 days for setup and configuration.
    - E. You can increase or decrease your compute capacity depending on the demands of your application.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: C, E
    </details>

37. Each AWS Region is composed of multiple Availability Zones. Which of the following best describes what an Availability Zone is?
    - A. It is a data center designed to be completely isolated from other data centers in the same region.
    - B. It is a collection of data centers distributed in multiple countries.
    - C. It is a logically isolated network of the AWS Cloud.
    - D. It is a distinct location within a region that is insulated from « failures in other Availability Zones.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: D
    </details>

38. AWS provides disaster recovery capability by allowing customers to deploy infrastructure into multiple [...].
    - A. Regions.
    - B. Transportation devices.
    - C. Support plans.
    - D. Edge locations.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A
    </details>

39. A financial services company decides to migrate one of its applications to AWS. The application deals with sensitive data, such as credit card information, and must run on a PCI-compliant environment. Which of the following is the company’s responsibility when building a PCI-compliant environment in AWS? (Choose TWO)
    - A. Start the migration process immediately as all AWS services are PCI compliant.
    - B. Ensure that AWS services are configured properly to meet all PCI DSS standards.
    - C. Restrict any access to cardholder data and create a policy that addresses information security for all personnel.
    - D. Configure the underlying infrastructure of AWS services to meet all PCI DSS requirements.
    - E. Ensure that all PCI DSS physical security requirements are met.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: B, C
    </details>

40. What is the maximum amount of data that can be stored in S3 in a single AWS account?
    - A. 100 PetaBytes.
    - B. Virtually unlimited storage.
    - C. 5TeraBytes.
    - D. 10 Exabytes.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: B
    </details>

41. Which pillar of the AWS Well-Architected Framework provides recommendations to help customers select the right compute resources based on workload requirements?
    - A. Operational Excellence.
    - B. Security.
    - C. Performance Efficiency.
    - D. Reliability.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: C
    </details>

42. Which AWS service delivers data, videos, applications, and APIs to users globally with low latency and high transfer speeds?
    - A. Amazon Route 53.
    - B. Amazon Connect.
    - C. Amazon CloudFront.
    - D. Amazon EC2.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: C
    </details>

43. Which of the following steps should be taken by a customer when conducting penetration testing on AWS?
    - A. Conduct penetration testing using Amazon Inspector, and then notify AWS support.
    - B. Request and wait for approval from the customer’s internal security team, and then conduct testing.
    - C. Notify AWS support, and then conduct testing immediately.
    - D. Request and wait for approval from AWS support, and then conduct testing.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: D
    </details>

44. Which AWS Cost Management tool allows you to view the most granular data about your AWS bill?
    - A. AWS Cost Explorer.
    - B. AWS Budgets.
    - C. AWS Cost and Usage report.
    - D. AWS Billing dashboard.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: C
    </details>

45. Which element of the AWS global infrastructure consists of one or more discrete data centers each with redundant power networking and connectivity which are housed in separate facilities?
    - A. AWS Regions.
    - B. Availability Zones.
    - C. Edge locations.
    - D. Amazon CloudFront.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: B
    </details>

46. How many Availability Zones should compute resources be provisioned across to achieve high availability?
    - A. A minimum of one.
    - B. A minimum of two.
    - C. A minimum of three.
    - D. A minimum of four or more.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: B
    </details>

47. The AWS Cloud’s multiple Regions are an example of:
    - A. Agility.
    - B. Global infrastructure.
    - C. Elasticity.
    - D. Pay-as-you-go pricing.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: B
    </details>

48. Which AWS service can be used to manually launch instances based on resource requirements?
    - A. Amazon EBS.
    - B. Amazon S3.
    - C. Amazon EC2.
    - D. Amazon ECS.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: C
    </details>

49. Which is a recommended pattern for designing a highly available architecture on AWS?
    - A. Ensure that components have low-latency network connectivity.
    - B. Run enough Amazon EC2 instances to operate at peak load.
    - C. Ensure that the application is designed to accommodate failure of any single component.
    - D. Use a monolithic application that handles all operations.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: C
    </details>

50. Which AWS characteristics make AWS cost effective for a workload with dynamic user demand? (Select TWO)
    - A. High availability.
    - B. Shared security model.
    - C. Elasticity.
    - D. Pay-as-you-go pricing.
    - E. Reliability.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: C, D
    </details>

