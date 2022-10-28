# AWS Architecting & Ecosystem

- [AWS Architecting & Ecosystem](#aws-architecting--ecosystem)
  - [Well Architected Framework General Guiding Principles](#well-architected-framework-general-guiding-principles)
  - [AWS Cloud Best Practices - Design Principles](#aws-cloud-best-practices---design-principles)
  - [Well Architected Framework 6 Pillars](#well-architected-framework-6-pillars)
    - [1. Operational Excellence](#1-operational-excellence)
    - [2. Security](#2-security)
    - [3. Reliability](#3-reliability)
    - [4. Performance Efficiency](#4-performance-efficiency)
    - [5. Cost Optimization](#5-cost-optimization)
    - [6. Sustainability](#6-sustainability)
  - [AWS Well-Architected Tool](#aws-well-architected-tool)
  - [AWS Right Sizing](#aws-right-sizing)
  - [AWS Ecosystem - Free resources](#aws-ecosystem---free-resources)
    - [AWS Ecosystem - AWS Support](#aws-ecosystem---aws-support)
  - [AWS Marketplace](#aws-marketplace)

## Well Architected Framework General Guiding Principles

- Stop guessing your capacity needs
- Test systems at production scale
- Automate to make architectural experimentation easier
- Allow for evolutionary architectures
  - Design based on changing requirements
- Drive architectures using data
- Improve through game days
  - Simulate applications for flash sale days

## AWS Cloud Best Practices - Design Principles

- **Scalability**: vertical & horizontal
- **Disposable Resources**: servers should be disposable & easily configured
- **Automation**: Serverless, Infrastructure as a Service, Auto Scaling…
- **Loose Coupling**:
  - Monolith are applications that do more and more over time, become bigger
  - Break it down into smaller, loosely coupled components
  - A change or a failure in one component should not cascade to other components
- **Services, not Servers**:
  - Don’t use just EC2
  - Use managed services, databases, serverless, etc..

## Well Architected Framework 6 Pillars

1. Operational Excellence
2. Security
3. Reliability
4. Performance Efficiency
5. Cost Optimization
6. Sustainability

### 1. Operational Excellence

- Includes the ability to run and monitor systems to deliver business value and to continually improve supporting processes and procedures
- Design Principles
  - **Perform operations as code** - Infrastructure as code
  - **Annotate documentation** - Automate the creation of annotated documentation after every build
  - **Make frequent, small, reversible changes** - So that in case of any failure, you can reverse it
  - **Refine operations procedures frequently** - And ensure that team members are familiar with it
  - **Anticipate failure**
  - **Learn from all operational failures**

### 2. Security

- Includes the ability to protect information, systems, and assets while delivering business value through risk assessments and mitigation strategies
- Design Principles
  - **Implement a strong identity foundation** - Centralize privilege management and reduce (or even eliminate) reliance on long-term credentials - Principle of least privilege - IAM
  - **Enable traceability** - Integrate logs and metrics with systems to automatically respond and take action
  - **Apply security at all layers** - Like edge network, VPC, subnet, load balancer, every instance, operating system, and application
  - **Automate security best practices**
  - **Protect data in transit and at rest** - Encryption, tokenization, and access control
  - **Keep people away from data** - Reduce or eliminate the need for direct access or manual processing of data
  - **Prepare for security events** - Run incident response simulations and use tools with automation to increase your speed for detection, investigation, and recovery
  - **Shared Responsibility Mode**

### 3. Reliability

- Ability of a system to recover from infrastructure or service disruptions, dynamically acquire computing resources to meet demand, and mitigate disruptions such as misconfigurations or transient network issues
- Design Principles
  - Test recovery procedures - Use automation to simulate different failures or to recreate scenarios that led to failures before
  - Automatically recover from failure - Anticipate and remediate failures before they occur
  - Scale horizontally to increase aggregate system availability - Distribute requests across multiple, smaller resources to ensure that they don't share a common point of failure
  - Stop guessing capacity - Maintain the optimal level to satisfy demand without over or under provisioning - Use Auto Scaling
  - Manage change in automation - Use automation to make changes to infrastructure

### 4. Performance Efficiency

- Includes the ability to use computing resources efficiently to meet system requirements, and to maintain that efficiency as demand changes and technologies evolve
- Design Principles
  - **Democratize advanced technologies** - Advance technologies become services and hence you can focus more on product development
  - **Go global in minutes** - Easy deployment in multiple regions
  - **Use serverless architectures** - Avoid burden of managing servers
  - **Experiment more often** - Easy to carry out comparative testing
  - **Mechanical sympathy** - Be aware of all AWS services

### 5. Cost Optimization

- Includes the ability to run systems to deliver business value at the lowest price point
- Design Principles
  - **Adopt a consumption mode** - Pay only for what you use
  - **Measure overall efficiency** - Use CloudWatch
  - **Stop spending money on data center operations** - AWS does the infrastructure part and enables customer to focus on   organization projects
  - **Analyze and attribute expenditure** - Accurate identification of system usage and costs, helps measure return on investment (ROI) - Make sure to use tags
  - **Use managed and application level services to reduce cost of ownership** - As managed services operate at cloud scale, they can offer a lower cost per transaction or service

### 6. Sustainability

- The sustainability pillar focuses on minimizing the environmental impacts of running cloud workloads.
- Design Principles
  - **Understand your impact** – establish performance indicators, evaluate improvements
  - **Establish sustainability goals** – Set long-term goals for each workload, model return on investment (ROI)
  - **Maximize utilization** – Right size each workload to maximize the energy efficiency of the underlying hardware and minimize idle resources.
  - **Anticipate and adopt new, more efficient hardware and software offerings** – and design for flexibility to adopt new technologies over time.
  - **Use managed services** – Shared services reduce the amount of infrastructure; Managed services help automate sustainability best practices as moving infrequent accessed data to cold storage and adjusting compute capacity.
  - **Reduce the downstream impact of your cloud workloads** – Reduce the amount of energy or resources required to use your services and reduce the need for your customers to upgrade their devices

## AWS Well-Architected Tool

- Free tool to **review your architectures** against the 6 pillars Well-Architected Framework and **adopt architectural best practices**
- How does it work?
  - Select your workload and answer questions
  - Review your answers against the 6 pillars
  - Obtain advice: get videos and documentations, generate a report, see the results in a dashboard
- Let’s have a look: <https://console.aws.amazon.com/wellarchitected>

## AWS Right Sizing

- EC2 has many instance types, but choosing the most powerful instance type isn’t the best choice, because the cloud is elastic
- Right sizing is the process of matching instance types and sizes to your workload performance and capacity requirements at the lowest possible cost
- Scaling up is easy so always start small
- It’s also the process of looking at deployed instances and identifying opportunities to eliminate or downsize without compromising capacity or other requirements, which results in lower costs
- It’s important to Right Size…
  - before a Cloud Migration
  - continuously after the cloud onboarding process (requirements change over time)
- CloudWatch, Cost Explorer, Trusted Advisor, 3rd party tools can help

## AWS Ecosystem - Free resources

- AWS Blogs: <https://aws.amazon.com/blogs/aws/>
- AWS Forums (community): <https://forums.aws.amazon.com/index.jspa>
- AWS Whitepapers & Guides: <https://aws.amazon.com/whitepapers>
- AWS Quick Starts: <https://aws.amazon.com/quickstart/>
  - Automated, gold-standard deployments in the AWS Cloud
  - Build your production environment quickly with templates
  - Example: WordPress on AWS <https://fwd.aws/P3yyv?did=qs_card&trk=qs_card>
  - Leverages CloudFormation
- AWS Solutions: <https://aws.amazon.com/solutions/>
  - Vetted Technology Solutions for the AWS Cloud
  - Example - AWS Landing Zone: secure, multi-account AWS environment
    - <https://aws.amazon.com/solutions/implementations/aws-landing-zone/>
    - “Replaced” by AWS Control Tower

### AWS Ecosystem - AWS Support

| DEVELOPER                                               | BUSINESS                                                      | ENTERPRISE                                                      |
| ------------------------------------------------------- | ------------------------------------------------------------- | --------------------------------------------------------------- |
| Business hours email access to Cloud Support Associates | 24x7 phone, email, and chat access to Cloud Support Engineers | Access to a Technical Account Manager (TAM)                     |
| General guidance: < 24 business hours                   | Production system impaired: < 4 hours                         | Concierge Support Team (for billing and account best practices) |
| System impaired: < 12 business hours                    | Production system down: < 1 hour                              | Business-critical system down: < 15 minutes                     |

## AWS Marketplace

- Digital catalog with thousands of software listings from **independent software vendors** (3rd party)
- Example:
  - Custom AMI (custom OS, firewalls, technical solutions…)
  - CloudFormation templates
  - Software as a Service
  - Containers
- If you buy through the AWS Marketplace, it goes into your AWS bill
- You can **sell your own solutions** on the AWS Marketplace

* * *

[<img align="center" src="../images/back-arrow.png" height="20" width="20"/> Other AWS Services](./other_aws_services.md)&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;[<img align="center" src="../images/list.png" height="30" width="30"/> List](../README.md)
