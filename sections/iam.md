# IAM: Identity Access & Management (IAM)

- [IAM: Identity Access \& Management (IAM)](#iam-identity-access--management-iam)
  - [What Is IAM?](#what-is-iam)
    - [IAM: Users \& Groups](#iam-users--groups)
    - [IAM: Permissions](#iam-permissions)
    - [IAM Policies Inheritance](#iam-policies-inheritance)
    - [IAM Policies Structure](#iam-policies-structure)
      - [Example IAM Policy](#example-iam-policy)
    - [IAM – Password Policy](#iam--password-policy)
      - [Common Password Policy Settings:](#common-password-policy-settings)
    - [IAM Roles for Services](#iam-roles-for-services)
    - [IAM Security Tools](#iam-security-tools)
    - [IAM Guidelines \& Best Practices](#iam-guidelines--best-practices)
    - [Shared Responsibility Model for IAM](#shared-responsibility-model-for-iam)

## What Is IAM?

- **Identity and Access Management (IAM)** is a web service for securely controlling access to AWS resources.
- Allows you to manage:
  - **Users**: Individual identities who interact with AWS services.
  - **Groups**: Collection of IAM users with similar access permissions.
  - **Roles**: Set of permissions to be assumed by AWS services or applications.

### IAM: Users & Groups

- **Users**: Represent individual identities that interact with AWS services. Users have unique credentials (username, password, access keys).
- **Groups**: Logical grouping of users to simplify permission management.
  - Permissions assigned to a group are automatically inherited by its users.

| **IAM Users**                                              | **IAM Groups**                                           |
|------------------------------------------------------------|----------------------------------------------------------|
| Unique identity for accessing AWS services.                | Logical grouping of users to apply common permissions.    |
| Each user has individual permissions based on policies.    | Adding/removing users from groups automatically changes their permissions. |

### IAM: Permissions

- **Permissions** are defined using policies.
- Policies specify what actions are allowed or denied on specific resources.
- Policies can be attached to:
  - **Users**
  - **Groups**
  - **Roles**

### IAM Policies Inheritance

- Policies are evaluated together for a user, including:
  - **Directly attached policies**.
  - **Group policies**.
  - **Policies attached to roles**.
- If multiple policies apply, IAM combines them to evaluate the final permission set.

| **Policy Type**                 | **Description**                                                                                  |
|---------------------------------|------------------------------------------------------------------------------------------------|
| **Inline Policies**             | Directly attached to a single user, group, or role.                                              |
| **Managed Policies**            | Reusable policies created and maintained by AWS (AWS-managed) or the customer (Customer-managed). |
| **Group Inherited Policies**     | Policies assigned to groups apply to all users in that group.                                    |

### IAM Policies Structure

- Policies are JSON documents that define permissions.
- Key elements of a policy:
  1. **Version**: Policy language version (e.g., `2012-10-17`).
  2. **Statement**: Contains one or more permissions (allow or deny).
  3. **Action**: Specifies which AWS service actions are allowed or denied.
  4. **Resource**: Specifies the AWS resources to which the actions apply.
  5. **Effect**: Either `Allow` or `Deny`.

#### Example IAM Policy

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": "s3:ListBucket",
      "Resource": "arn:aws:s3:::example-bucket"
    }
  ]
}
```

### IAM – Password Policy

- AWS allows you to define a **password policy** for IAM users to ensure strong security standards.
- You can enforce specific rules to make sure passwords are complex and secure.

#### Common Password Policy Settings:

1. **Minimum password length**: Set a minimum number of characters (e.g., at least 8 characters).
2. **Require specific character types**:
   - Lowercase letters.
   - Uppercase letters.
   - Numbers.
   - Non-alphanumeric characters (special symbols like `!`, `@`, `#`).
3. **Prevent password reuse**: Enforce that new passwords cannot be the same as recently used passwords (e.g., prevent using the last 3 passwords).
4. **Password expiration**: Set the password to expire after a certain period (e.g., 90 days) to prompt users to change their passwords.
5. **Enable Multi-Factor Authentication (MFA)**: Enforce MFA for extra security, requiring both a password and a second authentication factor.

### IAM Roles for Services

- IAM roles are used to grant permissions to AWS services to perform actions on behalf of users or applications.
- Example use cases for IAM roles:
  1. An EC2 instance can assume a role to access S3 buckets without the need for storing long-term credentials.
  2. Lambda functions can use roles to interact with other AWS services without hardcoding access keys.

### IAM Security Tools

1. **IAM Credential Report**:
   - A report that provides details about all IAM users in the AWS account, including the status of their passwords and access keys.
   - Useful for auditing and reviewing user credentials.

2. **IAM Access Advisor**:
   - Shows service permissions granted to a user and indicates the last time those permissions were used.
   - Helps identify unnecessary permissions that can be revoked for least privilege.

3. **IAM Policy Simulator**:
   - A tool that lets you test and validate the impact of IAM policies before applying them to users, groups, or roles.
   - Helps to understand which actions are allowed or denied based on current policies.

### IAM Guidelines & Best Practices

1. **Follow the Principle of Least Privilege**:
   - Grant only the permissions required to perform a specific task.
   - Regularly review and adjust permissions as needed.

2. **Enable Multi-Factor Authentication (MFA)**:
   - Enforce MFA for privileged IAM users (e.g., admin accounts).
   - Adds an additional layer of security by requiring users to provide a code from an MFA device along with their password.

3. **Use IAM Roles Instead of IAM Users for Applications**:
   - Assign roles to AWS resources instead of using IAM user credentials in code or configuration files.
   - Prevents security issues that could arise from accidental exposure of long-term credentials.

4. **Rotate IAM Credentials Regularly**:
   - Regularly rotate IAM access keys and passwords.
   - Remove unused credentials to reduce risk.

5. **Use AWS Managed Policies for Common Use Cases**:
   - AWS provides a set of predefined managed policies that are regularly updated.
   - Managed policies are designed for common use cases and provide a good starting point for granting permissions.

### Shared Responsibility Model for IAM

- **AWS Responsibility**:
  - Protect the infrastructure that runs AWS services.
  - Provide IAM service availability.
  - Offer managed policies for common scenarios.

- **Customer Responsibility**:
  - Manage IAM users, groups, and roles.
  - Configure IAM policies correctly and apply the principle of least privilege.
  - Secure IAM credentials and enable MFA.
  - Regularly audit permissions using tools like IAM Credential Report and Access Advisor.

| **AWS Responsibility**                                    | **Customer Responsibility**                                                            |
|-----------------------------------------------------------|---------------------------------------------------------------------------------------|
| Protect physical data centers and global infrastructure.  | Manage and secure IAM user accounts and access keys.                                   |
| Maintain the availability of IAM service.                 | Implement strong password policies and enable MFA.                                     |
| Provide IAM managed policies for common scenarios.        | Ensure IAM permissions are correctly configured and follow the principle of least privilege. |
