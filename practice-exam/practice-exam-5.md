---
layout: exam
---

# Practice Exam 5

1. A company is using EC2 Instances to run their e-commerce site on the AWS platform. If the site becomes unavailable, the company will lose a significant amount of money for each minute the site is unavailable. Which design principle should the company use to minimize the risk of an outage?
    - A. Least Privilege.
    - B. Pilot Light.
    - C. Fault Tolerance.
    - D. Multi-threading.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: C
    </details>

2. You decide to buy a reserved instance for a term of one year. Which option provides the largest total discount?
    - A. All up-front reservation.
    - B. All reserved instance payment options provide the same discount level.
    - C. Partial up-front reservation.
    - D. No up-front reservation.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A
    </details>

3. What features does AWS offer to help protect your data in the Cloud? (Choose TWO)
    - A. Access control.
    - B. Physical MFA devices.
    - C. Data encryption.
    - D. Unlimited storage.
    - E. Load balancing.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A, C
    </details>

4. An AWS customer has used one Amazon Linux instance for 2 hours, 5 minutes and 9 seconds, and one CentOS instance for 4 hours, 23 minutes and 7 seconds. How much time will the customer be billed for?
    - A. 3 hours for the Linux instance and 5 hours for the CentOS instance.
    - B. 2 hours, 5 minutes and 9 seconds for the Linux instance and 4 hours, 23 minutes and 7 seconds for the CentOS instance.
    - C. 2 hours, 5 minutes and 9 seconds for the Linux instance and 5 hours for the CentOS instance.
    - D. 3 hours for the Linux instance and 4 hours, 23 minutes and 7 seconds for the CentOS instance.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: C

      Explanation:
      - Pricing is per instance-hour consumed for each instance, from the time an instance is launched until it is terminated or stopped.
      - Each partial instance-hour consumed will be billed per-second for Linux, Windows, Windows with SQL Enterprise, Windows with SQL Standard, and Windows with SQL Web Instances, and as a full hour for all other instance types.
    </details>

5. What is the AWS Support feature that allows customers to manage support cases programmatically?
    - A. AWS Trusted Advisor.
    - B. AWS Operations Support.
    - C. AWS Support API.
    - D. AWS Personal Health Dashboard.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: C
    </details>

6. Which methods can be used by customers to interact with AWS Identity and Access Management (IAM)? (Choose TWO)
    - A. AWS CLI.
    - B. AWS Security Groups.
    - C. AWS SDKs.
    - D. AWS Network Access Control Lists.
    - E. AWS CodeCommit.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A, C
    </details>

7. Which of the following are types of AWS Identity and Access Management (IAM) identities? (Choose TWO)
    - A. AWS Resource Groups.
    - B. IAM Policies.
    - C. IAM Roles.
    - D. IAM Users.
    - E. AWS Organizations.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: C, D
    </details>

8. Which of the following Amazon RDS features facilitates offloading of database read activity?
    - A. Database Snapshots.
    - B. Multi-AZ Deployments.
    - C. Automated Backups.
    - D. Read Replicas.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: D
    </details>

9. How does AWS notify customers about security and privacy events pertaining to AWS services?
    - A. Using the AWS ACM service.
    - B. Using Security Bulletins.
    - C. Using the AWS Management Console.
    - D. Using Compliance Resources.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: B
    </details>

10. Which IAM entity can best be used to grant temporary access to your AWS resources?
    - A. IAM Users.
    - B. Key Pair.
    - C. IAM Roles.
    - D. IAM Groups.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: C
    </details>

11. A company has a web application that is hosted on a single EC2 instance and is approaching 100 percent CPU Utilization during peak loads. Rather than scaling the server vertically, the company has decided to deploy three Amazon EC2 instances in parallel and to distribute traffic across the three servers. What AWS Service should the company use to distribute the traffic evenly?
    - A. AWS Global Accelerator.
    - B. AWS Application Load Balancer (ALB).
    - C. Amazon CloudFront.
    - D. Transit VPC.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: B
    </details>

12. Which of the following approaches will help you eliminate human error and automate the process of creating and updating your AWS environment?
    - A. Use Software test automation tools.
    - B. Use AWS CodeDeploy to build and automate your AWS environment.
    - C. Use code to provision and operate your AWS infrastructure.
    - D. Migrate all of your applications to a dedicated host.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: C
    </details>

13. A company is seeking to better secure its AWS account from unauthorized access. Which of the below options can the customer use to achieve this goal?
    - A. Restrict any API call made through SDKs or CLI.
    - B. Create one IAM account for each department in the company (Development, QA, Production), and share it across all staff in that department.
    - C. Require Multi-Factor Authentication (MFA) for all IAM User access.
    - D. Set up two login passwords.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: C
    </details>

14. Which AWS Service offers volume discounts based on usage?
    - A. Amazon VPC.
    - B. Amazon S3.
    - C. Amazon Lightsail.
    - D. AWS Cost Explorer.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: B
    </details>

15. Which of the following factors should be considered when determining the region in which AWS Resources will be deployed? (Choose TWO)
    - A. The AWS Region’s security level.
    - B. Data sovereignty.
    - C. Cost.
    - D. The planned number of VPCs.
    - E. Geographic proximity to the company's location.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: B, C
    </details>

16. You are running a financial services web application on AWS. The application uses a MySQL database to store the data. Which of the following AWS services would improve the performance of your application by allowing you to retrieve information from fast in-memory caches?
    - A. Amazon EFS.
    - B. Amazon Neptune.
    - C. Amazon ElastiCache.
    - D. DAX.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: C
    </details>

17. What are the advantages of using Auto Scaling Groups for EC2 instances?
    - A. Auto Scaling Groups caches the most recent responses at global edge locations to reduce latency and improve performance.
    - B. Auto Scaling Groups scales EC2 instances in multiple Availability Zones to increase application availability and fault tolerance.
    - C. Auto Scaling Groups scales EC2 instances across multiple regions to reduce latency for global users.
    - D. Auto Scaling Groups distributes application traffic across multiple Availability Zones to enhance performance.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: B
    </details>

18. The TCO gap between AWS infrastructure and traditional infrastructure has widened over the recent years. Which of the following could be the reason for that?
    - A. AWS helps customers invest more in capital expenditures.
    - B. AWS automates all infrastructure operations, so customers save more on human resources costs.
    - C. AWS continues to lower the cost of cloud computing for its customers.
    - D. AWS secures AWS resources at no additional charge.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: C
    </details>

19. Which of the following are examples of the customer’s responsibility to implement “security IN the cloud”? (Choose TWO)
    - A. Building a schema for an application.
    - B. Replacing physical hardware.
    - C. Creating a new hypervisor.
    - D. Patch management of the underlying infrastructure.
    - E. File system encryption.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A, E
    </details>

20. Which of the following is a type of MFA device that customers can use to protect their AWS resources?
    - A. AWS CloudHSM.
    - B. U2F Security Key.
    - C. AWS Access Keys.
    - D. AWS Key Pair.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: B
    </details>

21. A company is seeking to deploy an existing .NET application onto AWS as quickly as possible. Which AWS Service should the customer use to achieve this goal?
    - A. Amazon SNS.
    - B. AWS Elastic Beanstalk.
    - C. AWS Systems Manager.
    - D. AWS Trusted Advisor.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: B
    </details>

22. Which of the following is NOT a factor when estimating the costs of Amazon EC2? (Choose TWO)
    - A. The amount of time the instances will be running.
    - B. Number of security groups.
    - C. Allocated Elastic IP Addresses.
    - D. Number of Hosted Zones.
    - E. Number of instances.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: B, D
    </details>

23. Which AWS Service helps enterprises extend their on-premises storage to AWS in a cost-effective manner?
    - A. AWS Data Pipeline.
    - B. AWS Storage Gateway.
    - C. Amazon Aurora.
    - D. Amazon EFS.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: B
    </details>

24. A company is building an online cloud storage platform. They need a storage service that can scale capacity automatically, while minimizing cost. Which AWS storage service should the company use to meet these requirements?
    - A. Amazon Simple Storage Service.
    - B. Amazon Elastic Block Store.
    - C. Amazon Elastic Container Service.
    - D. AWS Storage Gateway.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A
    </details>

25. You have just hired a skilled sys-admin to join your team. As usual, you have created a new IAM user for him to interact with AWS services. On his first day, you ask him to create snapshots of all existing Amazon EBS volumes and save them in a new Amazon S3 bucket. However, the new member reports back that he is unable to create neither EBS snapshots nor S3 buckets. What might prevent him from doing this simple task?
    - A. EBS and S3 are accessible only to the root account owner.
    - B. The systems administrator must contact AWS Support first to activate his new IAM account.
    - C. There is not enough space in S3 to store the snapshots.
    - D. There is a non-explicit deny to all new users.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: D
    </details>

26. An external auditor is requesting a log of all accesses to the AWS resources in the company’s account. Which of the following services will provide the auditor with the requested information?
    - A. AWS CloudTrail.
    - B. Amazon CloudFront.
    - C. AWS CloudFormation.
    - D. Amazon CloudWatch.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A
    </details>

27. Which of the below options is true of Amazon Cloud Directory?
    - A. Amazon Cloud Directory allows the organization of hierarchies of data across multiple dimensions.
    - B. Amazon Cloud Directory enables the analysis of video and data streams in real time.
    - C. Amazon Cloud Directory allows users to access AWS with their existing Active Directory credentials.
    - D. Amazon Cloud Directory allows for registration and management of domain names.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A
    </details>

28. A user has opened a "Production System Down" support case to get help from AWS Support after a production system disruption. What is the expected response time for this type of support case?
    - A. 12 hours.
    - B. 15 minutes.
    - C. 24 hours.
    - D. One hour.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: D
    </details>

29. Which of the below options is a best practice for making your application on AWS highly available?
    - A. Deploy the application to at least two Availability Zones.
    - B. Use Elastic Load Balancing (ELB) across multiple AWS Regions.
    - C. Deploy the application code on at least two servers in the same Availability Zone.
    - D. Rewrite the application code to handle all incoming requests.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A
    </details>

30. Which of the following should be taken into account when performing a TCO analysis regarding the costs of running an application on AWS VS on-premises? (Choose TWO)
    - A. Labor and IT costs.
    - B. Cooling and power consumption.
    - C. Amazon EBS computing power.
    - D. Software architecture.
    - E. Software compatibility.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A, B
    </details>

31. Your company requires a response time of less than 15 minutes from support interactions about their business-critical systems that are hosted on AWS if those systems go down. Which AWS Support Plan should this company use?
    - A. AWS Basic Support.
    - B. AWS Developer Support.
    - C. AWS Business Support.
    - D. AWS Enterprise Support.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: D
    </details>

32. Which of the following AWS offerings are serverless services? (Choose TWO)
    - A. Amazon EC2.
    - B. AWS Lambda.
    - C. Amazon DynamoDB.
    - D. Amazon EMR.
    - E. Amazon RDS.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: B, C
    </details>

33. Which AWS service enables you to quickly purchase and deploy SSL/TLS certificates?
    - A. Amazon GuardDuty.
    - B. AWS ACM.
    - C. Amazon Detective.
    - D. AWS WAF.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: B
    </details>

34. Which AWS Service provides integration with Chef to automate the configuration of EC2 instances?
    - A. AWS Config.
    - B. AWS OpsWorks.
    - C. AutoScaling.
    - D. AWS CloudFormation.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: B
    </details>

35. A customer is seeking to store objects in their AWS environment and to make those objects downloadable over the internet. Which AWS Service can be used to accomplish this?
    - A. Amazon EBS.
    - B. Amazon EFS.
    - C. Amazon S3.
    - D. Amazon Instance Store.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: C
    </details>

36. Which of the following services can be used to monitor the HTTP and HTTPS requests that are forwarded to Amazon CloudFront?
    - A. AWS WAF.
    - B. Amazon CloudWatch.
    - C. AWS Cloud9.
    - D. AWS CloudTrail.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: B
    </details>

37. A company is migrating a web application to AWS. The application’s compute capacity is continually utilized throughout the year. Which of the below options offers the company the most cost-effective solution?
    - A. On-demand Instances.
    - B. Dedicated Hosts.
    - C. Spot Instances.
    - D. Reserved Instances.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: D
    </details>

38. A company wants to grant a new employee long-term access to manage Amazon DynamoDB databases. Which of the following is a recommended best-practice when granting these permissions?
    - A. Create an IAM role and attach a policy with Amazon DynamoDB access permissions.
    - B. Create an IAM role and attach a policy with Administrator access permissions.
    - C. Create an IAM user and attach a policy with Amazon DynamoDB access permissions.
    - D. Create an IAM user and attach a policy with Administrator access permissions.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: C
    </details>

39. When granting permissions to applications running on Amazon EC2 instances, which of the following is considered best practice?
    - A. Generate new IAM access keys every time you delegate permissions.
    - B. Store the required AWS credentials directly within the application code.
    - C. Use temporary security credentials (IAM roles) instead of long-term access keys.
    - D. Do nothing; Applications that run on Amazon EC2 instances do not need permission to interact with other AWS services or resources.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: C
    </details>

40. Which of the following will help AWS customers save on costs when migrating their workloads to AWS?
    - A. Use servers instead of managed services.
    - B. Use existing third-party software licenses on AWS.
    - C. Migrate production workloads to AWS edge locations instead of AWS Regions.
    - D. Use AWS Outposts to run all workloads in a cost-optimized environment.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: B
    </details>

41. An organization has a legacy application designed using monolithic-based architecture. Which AWS Service can be used to decouple the components of the application?
    - A. Amazon SQS.
    - B. Virtual Private Gateway.
    - C. AWS Artifact.
    - D. Amazon CloudFront.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A
    </details>

42. Which of the following can be used to enable the Virtual Multi-Factor Authentication? (Choose TWO)
    - A. Amazon Connect.
    - B. AWS CLI.
    - C. AWS Identity and Access Management (IAM).
    - D. Amazon SNS.
    - E. Amazon Virtual Private Cloud.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: B, C
    </details>

43. According to best practices, which of the below options is best suited for processing a large number of binary files?
    - A. Vertically scaling EC2 instances.
    - B. Running RDS instances in parallel.
    - C. Vertically scaling RDS instances.
    - D. Running EC2 instances in parallel.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: D
    </details>

44. A company is planning to use Amazon S3 and Amazon CloudFront to distribute its video courses globally. What tool can the company use to estimate the costs of these services?
    - A. AWS Cost Explorer.
    - B. AWS Pricing Calculator.
    - C. AWS Budgets.
    - D. AWS Cost & Usage Report.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: B
    </details>

45. What should you do if you see resources, which you don’t remember creating, in the AWS Management Console? (Choose TWO)
    - A. Stop all running services and open an investigation.
    - B. Give your root account password to AWS Support so that they can assist in troubleshooting and securing the account.
    - C. Check the AWS CloudTrail logs and delete all IAM users that have access to your resources.
    - D. Open an investigation and delete any potentially compromised IAM users.
    - E. Change your AWS root account password and the passwords of any IAM users.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: D, E
    </details>

46. A key practice when designing solutions on AWS is to minimize dependencies between components so that the failure of a single component does not impact other components. What is this practice called?
    - A. Elastic coupling.
    - B. Loosely coupling.
    - C. Scalable coupling.
    - D. Tightly coupling.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: B
    </details>

47. Which AWS Service offers an NFS file system that can be mounted concurrently from multiple EC2 instances?
    - A. Amazon Elastic File System.
    - B. Amazon Simple Storage Service.
    - C. Amazon Elastic Block Store.
    - D. AWS Storage Gateway.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: A
    </details>

48. Availability Zones within a Region are connected over low-latency links. Which of the following is a benefit of these links?
    - A. Create private connection to your data center.
    - B. Achieve global high availability.
    - C. Automate the process of provisioning new compute resources.
    - D. Make synchronous replication of your data possible.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: D
    </details>

49. Which of the following are true regarding the languages that are supported on AWS Lambda? (Choose TWO)
    - A. Lambda only supports Python and Node.js, but third party plugins are available to convert code in other languages to these formats.
    - B. Lambda natively supports a number of programming languages such as Node.js, Python, and Java.
    - C. Lambda is AWS’ proprietary programming language for microservices.
    - D. Lambda doesn’t support programming languages; it is a serverless compute service.
    - E. Lambda can support any programming language using an API.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: B, E
    </details>

50. What are the capabilities of AWS X-Ray? (Choose TWO)
    - A. Automatically decouples application components.
    - B. Facilitates tracking of user requests to identify application issues.
    - C. Helps improve application performance.
    - D. Deploys applications to Amazon EC2 instances.
    - E. Deploys applications to on-premises servers.

    <details markdown=1><summary markdown='span'>Answer</summary>
      Correct answer: B, C
    </details>

