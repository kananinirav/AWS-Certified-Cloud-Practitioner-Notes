---
layout: exam
---

# Practice Exam 15

1. How do customers benefit from Amazon's massive economies of scale?
    - A. Periodic price reductions as the result of Amazon's operational efficiencies
    - B. New Amazon EC2 instance types providing the latest hardware
    - C. The ability to scale up and down when needed
    - D. Increased reliability in the underlying hardware of Amazon EC2 instances

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: A

    </details>

2. Which AWS services can be used to gather information about AWS account activity? (Select TWO.)
    - A. Amazon CloudFront
    - B. AWS Cloud9
    - C. AWS CloudTrail
    - D. AWS CloudHSM
    - E. Amazon CloudWatch

    <details markdown=1><summary markdown="span">Answer</summary>

      Correct Answer: CE

      Explanation:
      - AWS offers a solution that uses AWS CloudTrail to log account activity, Amazon Kinesis to compute and stream metrics in real-time, and Amazon DynamoDB to durably store the computed data.
      - Metrics are calculated for create, modify, and delete API calls for more than 60 supported AWS services.
      - The solution also features a dashboard that visualizes your account activity in real-time.

      Reference: <https://aws.amazon.com/solutions/real-time-insights-account-activity/>

    </details>

3. Which of the following common IT tasks can AWS cover to free up company IT resources? (Select TWO.)
    - A. Patching databases software
    - B. Testing application releases
    - C. Backing up databases
    - D. Creating database schema
    - E. Running penetration tests

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: AC

    </details>

4. In which scenario should Amazon EC2 Spot Instances be used?
    - A. A company wants to move its main website to AWS from an on-premises web server.
    - B. A company has a number of application services whose Service Level Agreement (SLA) requires 99.999% uptime.
    - C. A company's heavily used legacy database is currently running on-premises.
    - D. A company has a number of infrequent, interruptible jobs that are currently using On-Demand Instances.

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: D

    Explanation: <https://docs.aws.amazon.com/whitepapers/latest/cost-optimization-leveraging-ec2-spot-instances/spot-instance-interruptions.html>

    </details>

5. Which AWS feature should a customer leverage to achieve high availability of an application?
    - A. AWS Direct Connect
    - B. Availability Zones
    - C. Data centers
    - D. Amazon Virtual Private Cloud (Amazon VPC)

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: B

    Explanation:
    - This is to achieve High Availability for any web application (in this case SwiftCode) deployed in AWS.
    - The following features will be present:
    - High availability across multiple instances/multiple availability zones.
    - Auto Scaling of instances (scale up and scale down) based on number of requests coming in
    - Additional Security to the instances/database that are in production
    - No impact to end users during newer version of code deployment
    - No Impact during patching the instances

    </details>

6. Which is the minimum AWS Support plan that includes Infrastructure Event Management without additional costs?
    - A. Enterprise
    - B. Business
    - C. Developer
    - D. Basic

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: A

    Explanation: <https://aws.amazon.com/premiumsupport/plans/>

    </details>

7. Which AWS service can serve a static website?
    - A. Amazon S3
    - B. Amazon Route 53
    - C. Amazon QuickSight
    - D. AWS X-Ray

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: A

    Explanation:
    - You can host a static website on Amazon Simple Storage Service (Amazon S3). On a static website, individual webpages include static content.
    - They might also contain client-side scripts. By contrast, a dynamic website relies on server-side processing, including server-side scripts such as PHP, JSP, or ASP.NET. Amazon S3 does not support server-side scripting.

    Reference: <https://docs.aws.amazon.com/AmazonS3/latest/dev/WebsiteHosting.html>

    </details>

8. How does AWS shorten the time to provision IT resources?
    - A. It supplies an online IT ticketing platform for resource requests.
    - B. It supports automatic code validation services.
    - C. It provides the ability to programmatically provision existing resources.
    - D. It automates the resource request process from a company's IT vendor list.

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: C

    </details>

9. What can AWS edge locations be used for? (Select TWO.)
    - A. Hosting applications
    - B. Delivering content closer to users
    - C. Running NoSQL database caching services
    - D. Reducing traffic on the server by caching responses
    - E. Sending notification messages to end users

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: BD

    Explanation:
    - CloudFront delivers your content through a worldwide network of data centers called edge locations.
    When a user requests content that you're serving with CloudFront, the user is routed to the edge location that provides the lowest latency (time delay), so that content is delivered with the best possible performance.

    Reference: <https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html>

    </details>

10. Which of the following can limit Amazon Simple Storage Service (Amazon S3) bucket access to specific users?
    - A. A public and private key-pair
    - B. Amazon Inspector
    - C. AWS Identity and Access Management (IAM) policies
    - D. Security Groups

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: C

    Explanation:
    - To allow users to perform S3 actions on the bucket from the VPC endpoints or IP addresses, you must explicitly grant those user-level permissions.
    - You can grant user-level permissions on either an AWS Identity and Access Management (IAM) policy or another statement in the bucket policy.

    Reference: <https://aws.amazon.com/premiumsupport/knowledge-center/block-s3-traffic-vpc-ip/>

    </details>

11. A solution that is able to support growth in users, traffic, or data size with no drop in performance aligns with which cloud architecture principle?
    - A. Think parallel
    - B. Implement elasticity
    - C. Decouple your components
    - D. Design for failure

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: B

    Explanation: <https://d1.awsstatic.com/whitepapers/AWS_Cloud_Best_Practices.pdf>

    </details>

12. Which of the following tasks is the responsibility of AWS?
    - A. Encrypting client-side data
    - B. Configuring AWS Identity and Access Management (IAM) roles
    - C. Securing the Amazon EC2 hypervisor
    - D. Setting user password policies

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: C

    Explanation:
    - In EC2, the AWS IaaS offering, everything from the hypervisor layer down is AWS's responsibility.
    - A customer's poorly coded applications, misconfigured operating systems, or insecure firewall settings will not affect the hypervisor, it will only affect the customer's virtual machines running on that hypervisor.

    Reference: <https://www.mindpointgroup.com/blog/the-aws-shared-responsibility-model-part-1-security-in>- the-cloud/

    </details>

13. One benefit of On-Demand Amazon Elastic Compute Cloud (Amazon EC2) pricing is:
    - A. the ability to bid for a lower hourly cost.
    - B. paying a daily rate regardless of time used.
    - C. paying only for time used.
    - D. pre-paying for instances and paying a lower hourly rate.

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: C

    Explanation:
    - On-Demand Capacity Reservations are priced exactly the same as their equivalent (On-Demand) instance usage.
    - If a Capacity Reservation is fully utilized, you only pay for instance usage and nothing towards the Capacity Reservation
    - If a Capacity Reservation is partially utilized, you pay for the instance usage and for the unused portion of the Capacity Reservation.

    Reference: <https://aws.amazon.com/ec2/pricing/on-demand/>

    </details>

14. An administrator needs to rapidly deploy a popular IT solution and start using it immediately. <br/> Where can the administrator find assistance?
    - A. AWS Well-Architected Framework documentation
    - B. Amazon CloudFront
    - C. AWS CodeCommit
    - D. AWS Quick Start reference deployments

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: D

    Explanation:
    - Quick Starts are built by AWS solutions architects and partners to help you deploy popular technologies on AWS, based on AWS best practices for security and high availability.
    - These accelerators reduce hundreds of manual procedures into just a few steps, so you can build your production environment quickly and start using it immediately.

    Reference: <https://aws.amazon.com/quickstart/?quickstart-all.sort-by=item.additionalFields.updateDate&quickstart-all.sort-order=desc>

    </details>

15. Which of the following services is in the category of AWS serverless platform?
    - A. Amazon EMR
    - B. Elastic Load Balancing
    - C. AWS Lambda
    - D. AWS Mobile Hub

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: C

    Explanation:
    - AWS provides a set of fully managed services that you can use to build and run serverless applications.
    - Serverless applications don't require provisioning, maintaining, and administering servers for backend components such as compute, databases, storage, stream processing, message queueing, and more.
    - You also no longer need to worry about ensuring application fault tolerance and availability.
    - Instead, AWS handles all of these capabilities for you. Serverless platform includes: AWS lambda, Amazon S3, DynamoDB, API gateway, Amazon SNS, AWS step functions, Amazon kinesis and developing tools and services.

    Reference: <https://aws.amazon.com/serverless/>

    </details>

16. Which services are parts of the AWS serverless platform?
    - A. Amazon EC2, Amazon S3, Amazon Athena
    - B. Amazon Kinesis, Amazon SQS, Amazon EMR
    - C. AWS Step Functions, Amazon DynamoDB, Amazon SNS
    - D. Amazon Athena, Amazon Cognito, Amazon EC2

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: C

    Explanation:
    - AWS provides a set of fully managed services that you can use to build and run serverless applications.
    - Serverless applications don't require provisioning, maintaining, and administering servers for backend components such as compute, databases, storage, stream processing, message queueing, and more. You also no longer need to worry about ensuring application fault tolerance and availability.
    - Instead, AWS handles all of these capabilities for you.
    - Serverless platform includes: AWS lambda, Amazon S3, DynamoDB, API gateway, Amazon SNS, AWS step functions, Amazon kinesis and developing tools and services.

    Reference: <https://aws.amazon.com/serverless/>

    </details>

17. Under the shared responsibility model, which of the following is a shared control between a customer and AWS?
    - A. Physical controls
    - B. Patch management
    - C. Zone security
    - D. Data center auditing

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: B

    Explanation:

    - Shared Controls Controls which apply to both the infrastructure layer and customer layers, but in completely separate contexts or perspectives.
    - In a shared control, AWS provides the requirements for the infrastructure and the customer must provide their own control implementation within their use of AWS services.
    - Examples include:
    - Patch Management AWS is responsible for patching and fixing flaws within the infrastructure, but customers are responsible for patching their guest OS and applications.
    - Configuration Management AWS maintains the configuration of its infrastructure devices, but a customer is responsible for configuring their own guest operating systems, databases, and applications.
    - Awareness & Training AWS trains AWS employees, but a customer must train their own employees.
    - Customer Specific Controls which are solely the responsibility of the customer based on the application they are deploying within AWS services.
    - Service and Communications Protection or Zone Security which may require a customer to route or zone data within specific security environments.

    Reference: <https://aws.amazon.com/compliance/shared-responsibility-model/>

    </details>

18. What can AWS edge locations be used for? (Select TWO.)
    - A. Hosting applications
    - B. Delivering content closer to users
    - C. Running NoSQL database caching services
    - D. Reducing traffic on the server by caching responses
    - E. Sending notification messages to end users

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: BD

    Explanation:

    - CloudFront delivers your content through a worldwide network of data centers called edge locations.
    - When a user requests content that you're serving with CloudFront, the user is routed to the edge location that provides the lowest latency (time delay), so that content is delivered with the best possible performance.

    Reference: <https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html>

    </details>

19. What technology enables compute capacity to adjust as loads change?
    - A. Load balancing
    - B. Automatic failover
    - C. Round robin
    - D. Auto Scaling

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: D

    Explanation:
    - AWS Auto Scaling monitors your applications and automatically adjusts capacity to maintain steady, predictable performance at the lowest possible cost.
    - Using AWS Auto Scaling, it's easy to setup application scaling for multiple resources across multiple services in minutes. - The service provides a simple, powerful user interface that lets you build scaling plans for resources including Amazon EC2 instances and Spot Fleets, Amazon ECS tasks, Amazon DynamoDB tables and indexes, and Amazon Aurora Replicas.
    - AWS Auto Scaling makes scaling simple with recommendations that allow you to optimize performance, costs, or balance
    between them.
    - If you're already using Amazon EC2 Auto Scaling to dynamically scale your Amazon EC2 instances, you can now combine it with AWS Auto Scaling to scale additional resources for other AWS services.
    - With AWS Auto Scaling, your applications always have the right resources at the right time.

    Reference: <https://aws.amazon.com/autoscaling/>

    </details>

20. Which AWS services are defined as global instead of regional? (Select TWO.)
    - A. Amazon Route 53
    - B. Amazon EC2
    - C. Amazon S3
    - D. Amazon CloudFront
    - E. Amazon DynamoDB

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: AD

    Explanation: <http://jayendrapatil.com/aws-global-vs-regional-vs-az-resources/>

    </details>

21. Which AWS service would you use to obtain compliance reports and certificates?
    - A. AWS Artifact
    - B. AWS Lambda
    - C. Amazon Inspector
    - D. AWS Certificate Manager

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: A

    Explanation:
    - AWS Artifact is your go-to, central resource for compliance-related information that matters to you.
    - It provides on-demand access to AWS' security and compliance reports and select online agreements.
    - Reports available in AWS Artifact include our Service Organization Control (SOC) reports, Payment Card Industry (PCI) reports, and certifications from accreditation bodies across geographies and compliance verticals that validate the implementation and operating effectiveness of AWS security controls.
    - Agreements available in AWS Artifact include the Business Associate Addendum (BAA) and the Nondisclosure Agreement (NDA).

    Reference: <https://aws.amazon.com/artifact/>

    </details>

22. Under the shared responsibility model, which of the following tasks are the responsibility of the AWS customer? (Select TWO.)
    - A. Ensuring that application data is encrypted at rest
    - B. Ensuring that AWS NTP servers are set to the correct time
    - C. Ensuring that users have received security training in the use of AWS services
    - D. Ensuring that access to data centers is restricted
    - E. Ensuring that hardware is disposed of properly

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: AC

    Explanation: <https://aws.amazon.com/compliance/shared-responsibility-model/>

    </details>

23. Which AWS service can be used to manually launch instances based on resource requirements?
    - A. Amazon EBS
    - B. Amazon S3
    - C. Amazon EC2
    - D. Amazon ECS

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: C

    </details>

24. A company is migrating an application that is running non-interruptible workloads for a three-year time frame. <br/> Which pricing construct would provide the MOST cost-effective solution?
    - A. Amazon EC2 Spot Instances
    - B. Amazon EC2 Dedicated Instances
    - C. Amazon EC2 On-Demand Instances
    - D. Amazon EC2 Reserved Instances

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: D

    </details>

25. The financial benefits of using AWS are: (Select TWO.)
    - A. reduced Total Cost of Ownership (TCO).
    - B. increased capital expenditure (capex).
    - C. reduced operational expenditure (opex).
    - D. deferred payment plans for startups.
    - E. business credit lines for stratups.

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: AC

    </details>

26. Which of the following is entirely the responsibility of AWS, according to the AWS shared responsibility model?
    - A. Patching of the guest operating system
    - B. Security awareness and training
    - C. Physical and environmental controls
    - D. Development of an IAM password policy

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: C

    </details>

27. Which AWS service allows companies to connect an Amazon VPC to an on-premises data center? (Select TWO)
    - A. AWS VPN
    - B. Amazon Redshift
    - C. API Gateway
    - D. Amazon Direct Connect

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: A, D

    Explanation:

    - AWS Direct Connect enables you to securely connect your AWS environment to your on-premises data center or office location over a standard 1 gigabit or 10 gigabit Ethernet fiber-optic connection.
    - AWS Direct Connect offers dedicated high speed, low latency connection, which bypasses internet service providers in your
    network path.
    - An AWS Direct Connect location provides access to Amazon Web Services in the region it is associated with, as well as access to other US regions.
    - AWS Direct Connect allows you to logically partition the fiber-optic connections into multiple logical connections called Virtual Local Area Networks (VLAN).
    - You can take advantage of these logical connections to improve security, differentiate traffic, and achieve compliance requirements.

    Reference: <https://aws.amazon.com/getting-started/projects/connect-data-center-to-aws/>

    </details>

28. A company wants to reduce the physical compute footprint that developers use to run code. <br/> Which service would meet that need by enabling serverless architectures?
    - A. Amazon Elastic Compute Cloud (Amazon EC2)
    - B. AWS Lambda
    - C. Amazon DynamoDB
    - D. AWS CodeCommit

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: B

    Explanation:

    - AWS Lambda is an integral part of coding on AWS. It reduces physical compute footprint by utilizing aws cloud services to run code.

    </details>

29. Which AWS service provides alerts when an AWS event may impact a company's AWS resources?
    - A. AWS Personal Health Dashboard
    - B. AWS Service Health Dashboard
    - C. AWS Trusted Advisor
    - D. AWS Infrastructure Event Management

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: A

    Explanation:

    - AWS Personal Health Dashboard provides alerts and remediation guidance when AWS is experiencing events that may impact you.
    - While the Service Health Dashboard displays the general status of AWS services, Personal Health Dashboard gives you a personalized view into the performance and availability of the AWS services underlying your AWS resources.

    Reference: <https://aws.amazon.com/premiumsupport/technology/personal-health-dashboard/>

    </details>

30. Which of the following are categories of AWS Trusted Advisor? (Select TWO.)
    - A. Fault Tolerance
    - B. Instance Usage
    - C. Infrastructure
    - D. Performance
    - E. Storage Capacity

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: AD

    Explanation:

    - Like your customized cloud expert, AWS Trusted Advisor analyzes your AWS environment and provides best practice recommendations in five categories: cost optimization, performance, security, fault tolerance and service limits.

    Reference: <https://aws.amazon.com/premiumsupport/technology/trusted-advisor/>

    </details>

31. Which of the following services falls under the responsibility of the customer to maintain operating system configuration, security patching, and networking?    - A. Amazon RDS
    - B. Amazon EC2
    - C. Amazon ElastiCache
    - D. AWS Fargate

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: B

    Explanation:

    - The customer is responsible for managing, support, patching and control of the guest operating system and AWS services provided like EC2.

    Reference: <https://www.whizlabs.com/blog/aws-security-shared-responsibility/>

    </details>

32. A company will be moving from an on-premises data center to the AWS Cloud. <br/> What would be one financial difference after the move?
    - A. Moving from variable operational expense (opex) to upfront capital expense (capex).
    - B. Moving from upfront capital expense (capex) to variable capital expense (capex).
    - C. Moving from upfront capital expense (capex) to variable operational expense (opex).
    - D. Elimination of upfront capital expense (capex) and elimination of variable operational expense (opex)

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: C

    </details>

33. How should a customer forecast the future costs for running a new web application?
    - A. Amazon Aurora Backtrack
    - B. Amazon CloudWatch Billing Alarms
    - C. AWS Simple Monthly Calculator
    - D. AWS Cost and Usage report

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: C

    Explanation:

    - You can use Cost explorer which is part of Cost and Usage report to forecast future costs of running an application.

    Reference: <https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/ce-forecast.html>

    </details>

34. Which is the MINIMUM AWS Support plan that provides technical support through phone calls?
    - A. Enterprise
    - B. Business
    - C. Developer
    - D. Basic

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: B

    Explanation:

    <https://aws.amazon.com/premiumsupport/plans/>

    </details>

35. According to the AWS shared responsibility model, what is the sole responsibility of AWS?
    - A. Application security
    - B. Edge location management
    - C. Patch management
    - D. Client-side data

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: B

    Explanation:

    - Client-side data, application security is the sole responsibility of the customer.
    - Patch management is a shared responsibility. That leaves us with edge location management and since this out of the control of the customer, AWS is the one responsible for it.

    Reference: <https://aws.amazon.com/compliance/shared-responsibility-model/>

    </details>

36. Which AWS IAM feature is used to associate a set of permissions with multiple users?
    - A. Multi-factor authentication
    - B. Groups
    - C. Password policies
    - D. Access keys

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: B

    Explanation:

    - An IAM group is a collection of IAM users. You can use groups to specify permissions for a collection of users, which can make those permissions easier to manage for those users.
    - For example, you could have a group called Admins and give that group the types of permissions that administrators typically need.

    Reference: <https://docs.aws.amazon.com/IAM/latest/UserGuide/id.html>

    </details>

37. Which of the following are benefits of the AWS Cloud? (Choose two.)
    - A. Unlimited uptime
    - B. Elasticity
    - C. Agility
    - D. Colocation
    - E. Capital expenses

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: BC

    Explanation:

    - The most celebrated benefit of AWS cloud is elasticity since you can expand the services when you experience more traffic.
    - Agile developments in AWS Cloud through strategies are day by day becoming more established within the enterprises across the world.
    - With so much improvement and call for optimization in the cloud, it is necessary that these strategies get established from the ground up within the organizations.
    - It is highly important as already enterprises have a lot of bequest, politics and hierarchies which act as barriers in their businesses.

    Reference: <https://www.botmetric.com/blog/evolution-agile-enterprises-aws-cloud/>

    </details>

38. Which of the following can a customer use to enable single sign-on (SSO) to the AWS Console?
    - A. Amazon Connect
    - B. AWS Directory Service
    - C. Amazon Pinpoint
    - D. Amazon Rekognition

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: B

    Explanation:

    - Single sign-on only works when used on a computer that is joined to the AWS Directory Service directory.
    - It cannot be used on computers that are not joined to the directory.

    Reference: <https://docs.aws.amazon.com/directoryservice/latest/admin-guide/ms_ad_single_sign_on.html>

    </details>

39. What are the multiple, isolated locations within an AWS Region that are connected by low-latency networks called?
    - A. AWS Direct Connects
    - B. Amazon VPCs
    - C. Edge locations
    - D. Availability Zones

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: D

    Explanation:

    - Each Region is completely independent. Each Availability Zone is isolated, but the Availability Zones in a Region are connected through low-latency links.
    - A Local Zone is an AWS infrastructure deployment that places select services closer to your end users.
    - A Local Zone is an extension of a Region that is in a different location from your Region.
    - It provides a high-bandwidth backbone to the AWS infrastructure and is ideal for latency-sensitive applications, for example machine learning.

    Reference: <https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html>

    </details>

40. Which of the following benefits does the AWS Compliance program provide to AWS customers? (Choose two.)
    - A. It verifies that hosted workloads are automatically compliant with the controls of supported compliance frameworks.
    - B. AWS is responsible for the maintenance of common compliance framework documentation.
    - C. It assures customers that AWS is maintaining physical security and data protection.
    - D. It ensures the use of compliance frameworks that are being used by other cloud providers.
    - E. It will adopt new compliance frameworks as they become relevant to customer workloads.

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: AB

    Explanation: <https://d0.awsstatic.com/whitepapers/compliance/AWS_Risk_and_Compliance_Whitepaper.pdf>

    </details>

41. Which of the following services provides on-demand access to AWS compliance reports?
    - A. AWS IAM
    - B. AWS Artifact
    - C. Amazon GuardDuty
    - D. AWS KMS

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: B

    Explanation:

    - AWS Artifact is your go-to, central resource for compliance-related information that matters to you.
    - It provides on-demand access to AWS' security and compliance reports and select online agreements.
    - Reports available in AWS Artifact include our Service Organization Control (SOC) reports, Payment Card Industry (PCI) reports, and certifications from accreditation bodies across geographies and compliance verticals that validate the implementation and operating effectiveness of AWS security controls.
    - Agreements available in AWS Artifact include the Business Associate Addendum (BAA) and the Nondisclosure Agreement (NDA).

    Reference: <https://aws.amazon.com/artifact/>

    </details>

42. As part of the AWS shared responsibility model, which of the following operational controls do users fully inherit from AWS?
    - A. Security management of data center
    - B. Patch management
    - C. Configuration management
    - D. User and access management

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: D

    Explanation: <https://aws.amazon.com/compliance/shared-responsibility-model/>

    </details>

43. When comparing AWS Cloud with on-premises Total Cost of Ownership, which expenses must be considered? (Choose two.)
    - A. Software development
    - B. Project management
    - C. Storage hardware
    - D. Physical servers
    - E. Antivirus software license

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: CD

    Explanation: <https://aws.amazon.com/blogs/aws/the-new-aws-tco-calculator/>

    </details>

44. Under the shared responsibility model, which of the following tasks are the responsibility of the customer? (Choose two.)
    - A. Maintaining the underlying Amazon EC2 hardware.
    - B. Managing the VPC network access control lists.
    - C. Encrypting data in transit and at rest.
    - D. Replacing failed hard disk drives.
    - E. Deploying hardware in different Availability Zones.

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: BC

    Explanation:

    - The hardware related jobs is the prime responsibility of AWS. VPC network access control lists is something a customer has to do himself to secure the applications.
    - Encrypting data in transit and at rest is a shared responsibility in which AWS plays a part.
    - All hardware related jobs have nothing to do with the customer.

    Reference: <https://dzone.com/articles/aws-shared-responsibility-model-cloud-security>

    </details>

45. Which scenarios represent the concept of elasticity on AWS? (Choose two.)
    - A. Scaling the number of Amazon EC2 instances based on traffic.
    - B. Resizing Amazon RDS instances as business needs change.
    - C. Automatically directing traffic to less-utilized Amazon EC2 instances.
    - D. Using AWS compliance documents to accelerate the compliance process.
    - E. Having the ability to create and govern environments using code.

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: AB

    Explanation: <https://wa.aws.amazon.com/wat.concept.elasticity.en.html>

    </details>

46. When is it beneficial for a company to use a Spot Instance?
    - A. When there is flexibility in when an application needs to run.
    - B. When there are mission-critical workloads.
    - C. When dedicated capacity is needed.
    - D. When an instance should not be stopped.

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: A

    Explanation:

    - The key to understanding spot instances is to look at the way that cloud service providers such as Amazon Web Services (AWS) operate.
    - Cloud service providers invest in hardware resources and then release those resources (often on a per-hour basis) to subscribers.
    - One of the problems with this business model, however, is that at any given time, there are likely to be compute resources that are not being utilized.
    - These resources represent hardware capacity that AWS has paid for but are sitting idle, and not making AWS any money at the moment.
    - Rather than allowing these computing resources to go to waste, AWS offers them at a substantially discounted rate, with the understanding that if someone needs those resources for running a normal EC2 instance, that instance will take priority over spot instances that are using the hardware resources at a discounted rate.
    - In fact, spot instances will be stopped if the resources are needed elsewhere.

    Reference: <https://awsinsider.net/articles/2017/09/25/aws-spot-instances-primer.aspx>

    </details>

47. A company is considering moving its on-premises data center to AWS. What factors should be included in doing a Total Cost of Ownership (TCO) analysis? (Choose two.)
    - A. Amazon EC2 instance availability
    - B. Power consumption of the data center
    - C. Labor costs to replace old servers
    - D. Application developer time
    - E. Database engine capacity

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: BC

    </details>

48. How does AWS charge for AWS Lambda?
    - A. Users bid on the maximum price they are willing to pay per hour.
    - B. Users choose a 1-, 3- or 5-year upfront payment term.
    - C. Users pay for the required permanent storage on a file system or in a database.
    - D. Users pay based on the number of requests and consumed compute resources.

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: D

    Explanation:

    - AWS Lambda is charging its users by the number of requests for their functions and by the duration, which is the time the code needs to execute.
    - When code starts running in response to an event, AWS Lambda counts a request.
    - It will charge the total number of requests across all of the functions used.
    - Duration is calculated by the time when your code started executing until it returns or until it is terminated, rounded up near to 100ms.
    - The AWS Lambda pricing depends on the amount of memory that the user used to allocate to the function.

    Reference: <https://dashbird.io/blog/aws-lambda-pricing-model-explained/>

    </details>

49. What function do security groups serve related Amazon Elastic Compute Cloud (Amazon EC2) instance security?
    - A. Act as a virtual firewall for the Amazon EC2 instance.
    - B. Secure AWS user accounts with AWS identity and Access Management (IAM) policies.
    - C. Provide DDoS protection with AWS Shield.
    - D. Use Amazon CloudFront to protect the Amazon EC2 instance.

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: A

    Explanation:

    - AWS Security Groups act like a firewall for your Amazon EC2 instances controlling both inbound and outbound traffic.
    - When you launch an instance on Amazon EC2, you need to assign it to a particular security group.
    - After that, you can set up ports and protocols, which remain open for users and computers over the internet.
    - AWS Security Groups are very flexible. You can use the default security group and still customize it according to your liking (although we don't recommend this practice because groups should be named according to their purpose.) Or you can create a security group that you want for your specific applications.
    - To do this, you can write the corresponding code or use the Amazon EC2 console to make the process easier.

    Reference: <https://www.threatstack.com/blog/aws-security-groups-what-they-are-and-how-to-get-the-most-out-of-them>

    </details>

50. Which disaster recovery scenario offers the lowest probability of down time?
    - A. Backup and restore
    - B. Pilot light
    - C. Warm standby
    - D. Multi-site active-active

    <details markdown=1><summary markdown="span">Answer</summary>

    Correct Answer: D

    Explanation:

    - Backup and Restore: a simple, straightforward, cost-effective method that backs up and restores data as needed.
    - Keep in mind that because none of your data is on standby, this method, while cheap, can be quite time-consuming.
    - Pilot Light: This method keeps critical applications and data at the ready so that it can be quickly retrieved if needed.
    - Warm Standby: This method keeps a duplicate version of your business' core elements running on standby at all times, which makes for a little downtime and an almost seamless transition.
    - Multi-Site Solution: Also known as a Hot Standby, this method fully replicates your company's data/ applications between two or more active locations and splits your traffic/usage between them.
    - If a disaster strikes, everything is simply rerouted to the unaffected area, which means you'll suffer almost zero downtime.
    - However, by running two separate environments simultaneously, you will obviously incur much higher costs.

    Reference: <https://cloudranger.com/best-practices-aws-disaster-recovery-planning/>
    </details>

