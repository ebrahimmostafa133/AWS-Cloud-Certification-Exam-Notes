const notesData = [
    {
        id: 1,
        title: "RDS Multi-AZ",
        category: "database",
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        content: "<p>RDS Multi-AZ is designed for <strong>high availability</strong> and <strong>durability</strong>. It automatically creates a primary database and synchronously replicates data to a standby instance in a different AZ.</p>"
    },
    {
        id: 2,
        title: "RDS Read Replicas",
        category: "database",
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        content: "<p>Unlike Multi-AZ, <strong>Read Replicas</strong> are used specifically to improve <strong>read performance</strong>. Multi-AZ does <em>not</em> allow read operations from the standby instance.</p>"
    },
    {
        id: 3,
        title: "RDS Multi-Region",
        category: "database",
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        content: "<p>To protect your database from a full <strong>regional failure</strong>, you must use a Multi-Region deployment. Standard Multi-AZ will only protect you within a single region.</p>"
    },
    {
        id: 4,
        title: "Auto Scaling Groups",
        category: "compute",
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        content: "<p>Auto Scaling automatically aligns the number of EC2 instances with actual demand to help <strong>optimize costs</strong> securely, completely preventing over-provisioning.</p>"
    },
    {
        id: 5,
        title: "EC2 Cost Savings",
        category: "compute",
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        content: "<p>The best way to save on EC2 is by purchasing <strong>Reserved Instances (RIs)</strong> for long-term usage (up to 72% discount), or scaling horizontally. Vertically scaling (adding CPU/RAM) is much more expensive.</p>"
    },
    {
        id: 6,
        title: "Amazon GuardDuty",
        category: "security",
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        content: "<p><strong>GuardDuty</strong> is a managed threat detection service. It identifies malicious activity by analyzing logs like CloudTrail, VPC Flow Logs, and DNS query logs.</p>"
    },
    {
        id: 7,
        title: "AWS Network Firewall",
        category: "networking",
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        content: "<p>Use <strong>Network Firewall</strong> (or Security Groups) to proactively enforce secure communication between your VPCs via network traffic filtering.</p>"
    },
    {
        id: 8,
        title: "AWS ACM & KMS",
        category: "security",
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        content: "<p>Use <strong>ACM</strong> (Certificate Manager) and <strong>KMS</strong> (Key Management Service) to handle encryption and manage your TLS certificates for data in transit.</p>"
    },
    {
        id: 9,
        title: "AWS WAF",
        category: "security",
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        content: "<p>Use <strong>WAF</strong> (Web Application Firewall) to protect your web applications from common exploits and vulnerabilities like SQL injection and cross-site scripting (XSS).</p>"
    },
    {
        id: 10,
        title: "Hybrid Deployment",
        category: "compute",
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        content: "<p><strong>Hybrid deployment</strong> connects your existing on-premises infrastructure to the AWS Cloud. It extends your infrastructure while connecting cloud resources directly to internal systems.</p>"
    },
    {
        id: 11,
        title: "Cloud Deployment",
        category: "compute",
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        content: "<p>In a fully public <strong>Cloud deployment</strong>, an application is created or migrated to be fully deployed, running all of its parts exclusively in the cloud environment.</p>"
    },
    {
        id: 12,
        title: "Private Deployment",
        category: "compute",
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        content: "<p><strong>Private (On-premises)</strong> deployment means deploying resources locally using virtualization. It lacks cloud benefits but is sometimes sought out specifically to provide dedicated physical resources.</p>"
    },
    {
        id: 13,
        title: "RDS Horizontal Scaling",
        category: "database",
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        content: "<p>The primary benefit of an RDS Read Replica configuration is <strong>scalability</strong> (horizontal scaling) for read-heavy workloads. It does <em>not</em> improve availability.</p>"
    },
    {
        id: 14,
        title: "Amazon Aurora Replicas",
        category: "database",
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        content: "<p>Aurora extends the benefits of Read Replicas by employing a shared SSD-backed virtualized storage layer, <strong>lowering costs</strong> and avoiding strict data-copying constraints.</p>"
    },
    {
        id: 15,
        title: "Massive Economies of Scale",
        category: "compute",
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        content: "<p>Because AWS aggregates usage from hundreds of thousands of customers, the cloud achieves massive economies of scale, directly passing savings forward as <strong>lower pay-as-you-go prices</strong>.</p>"
    },
    {
        id: 16,
        title: "Trade Capital for Variable Expense",
        category: "compute",
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        content: "<p>Instead of investing heavily up-front in data centers and servers, you safely <strong>trade capital expense for variable expense</strong> by paying solely for what you dynamically consume.</p>"
    },
    {
        id: 17,
        title: "Increase Speed and Agility",
        category: "compute",
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        content: "<p>New IT resources are just a click away. You dramatically reduce the time it takes to experiment and develop by bringing resource availability down to exactly <strong>minutes instead of weeks</strong>.</p>"
    },
    {
        id: 18,
        title: "Stop Guessing Capacity",
        category: "compute",
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        content: "<p>Completely eliminate guesswork on infrastructure capacity needs. You can scale automatically based on usage, removing the risk of sitting on <strong>expensive idle resources</strong> or limited capacity.</p>"
    },
    {
        id: 19,
        title: "Stop Managing Data Centers",
        category: "compute",
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        content: "<p>Delegate the heavy lifting of racking, stacking, and powering server hardware. Cloud computing lets you aggressively focus exclusively on projects that <strong>differentiate your business</strong>.</p>"
    },
    {
        id: 20,
        title: "Go Global in Minutes",
        category: "compute",
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        content: "<p>You can instantly deploy practically identical application stacks in multiple AWS regions globally with just a few clicks to easily provide <strong>minimal latency</strong> for worldwide customers.</p>"
    },
    {
        id: 21,
        title: "AWS CodeDeploy",
        category: "compute",
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        content: "<p><strong>Automates actual code deployments</strong> directly to EC2 or on-premises instances, aggressively eliminating error-prone manual operations and avoiding downtime.</p>"
    },
    {
        id: 22,
        title: "AWS CodeCommit",
        category: "compute",
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        content: "<p>A fully-managed <strong>Git-based source control</strong> service for secure team collaboration. It explicitly does not deploy application code.</p>"
    },
    {
        id: 23,
        title: "AWS CloudFormation",
        category: "compute",
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        content: "<p><strong>Provisions your infrastructure resources</strong> systematically using automated templates (Infrastructure as Code). It handles resources, not application code deployment.</p>"
    },
    {
        id: 24,
        title: "AWS CodePipeline",
        category: "compute",
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        content: "<p>A continuous delivery service that models and <strong>automates visual release steps</strong>. It cannot rapidly deploy code by itself, but instead integrates tightly with CodeDeploy to execute the action.</p>"
    },
    {
        id: 25,
        title: "AWS Acceptable Use Policy",
        category: "security",
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        content: "<p>The singular, official policy that explicitly outlines and describes all strictly <strong>prohibited uses</strong> of the web services and infrastructure offered by Amazon.</p>"
    },
    {
        id: 26,
        title: "AWS Trusted Advisor",
        category: "security",
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        content: "<p>An online tool providing real-time guidance to automatically analyze your environment and ensure it follows AWS <strong>best practices</strong> (cost optimization, security, fault tolerance, performance).</p>"
    },
    {
        id: 27,
        title: "Amazon EFS",
        category: "storage",
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        content: "<p><strong>Elastic File System</strong> provides a highly scalable Network File System (NFS). Crucially, it allows hundreds of EC2 instances to safely access and <strong>append data concurrently</strong>.</p>"
    },
    {
        id: 28,
        title: "Amazon EBS",
        category: "storage",
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        content: "<p><strong>Elastic Block Store</strong> provides high-performance block storage fundamentally meant for a <strong>single EC2 instance</strong> at a time. It cannot be accessed by multiple instances simultaneously.</p>"
    },
    {
        id: 29,
        title: "AWS Instance Store",
        category: "storage",
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        content: "<p>Provides <strong>temporary (ephemeral)</strong> block-level storage on disks physically attached to the host computer. It cannot be shared or accessed together by multiple instances.</p>"
    },
    {
        id: 30,
        title: "S3 Object Restrictions",
        category: "storage",
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        content: "<p>Because Amazon S3 is explicitly an <strong>object storage</strong> service rather than file or block structure, it fundamentally does <em>not</em> support file <strong>append</strong> operations.</p>"
    },
    {
        id: 31,
        title: "Multi-AZ Deployment",
        category: "compute",
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        content: "<p>A <strong>Multi-AZ deployment</strong> is fundamentally an example of achieving <strong>High Availability</strong>. It enables your application to withstand infrastructure degradation smoothly and remain fully functional.</p>"
    },
    {
        id: 32,
        title: "Scale Out (Horizontal)",
        category: "compute",
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        content: "<p><strong>Scaling Out</strong> means aggressively adding <em>more</em> resources/computers (e.g., Auto Scaling Groups) to multiply parallel execution capacity, often easily outperforming vertical scaling.</p>"
    },
    {
        id: 33,
        title: "Scale Up (Vertical)",
        category: "compute",
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        content: "<p><strong>Scaling Up</strong> refers specifically to increasing raw performance directly by heavily adding CPU, RAM, or storage to a <em>single</em> isolated machine (like resizing a specific EC2 instance).</p>"
    },
    {
        id: 34,
        title: "Performance Efficiency",
        category: "compute",
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        content: "<p>The core capability to actively use computing resources smartly to meet system requirements, and crucially, fully maintaining that <strong>efficiency</strong> as underlying technology or traffic demands dynamically shift.</p>"
    },
    {
        id: 35,
        title: "U2F Security Key",
        category: "security",
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        content: "<p>A physical MFA device that you plug directly into a USB port on your computer. You simply <strong>tap it to authenticate</strong>, completely eliminating the need to type any manual codes.</p>"
    },
    {
        id: 36,
        title: "Virtual MFA Device",
        category: "security",
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        content: "<p>A <strong>software app</strong> running on a smartphone or other device that actively emulates a physical token, dynamically generating a 6-digit numeric time-synchronized code to be manually typed upon sign-in.</p>"
    },
    {
        id: 37,
        title: "Hardware MFA Device",
        category: "security",
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        content: "<p>A <strong>physical hardware item</strong> (like a key fob) that uniquely generates a 6-digit numeric time-synchronized one-time password algorithm code that the user must manually type.</p>"
    },
    {
        id: 38,
        title: "SMS-based MFA",
        category: "security",
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        content: "<p>An MFA method where AWS simply sends a 6-digit numeric code via <strong>SMS text message</strong> to a registered mobile device, which must then be manually entered during sign-in.</p>"
    },
    {
        id: 39,
        title: "Amazon DynamoDB",
        category: "database",
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        content: "<p>A fully managed key-value and document database delivering sub-millisecond performance at virtually any scale with the <strong>LEAST operational overhead</strong>. Excellent for things like recommendation engines.</p>"
    },
    {
        id: 40,
        title: "Amazon Neptune",
        category: "database",
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        content: "<p>A fast, reliable, fully managed database service uniquely built for the cloud that makes it remarkably easy to build, query, and run massive <strong>graph applications</strong>.</p>"
    },
    {
        id: 41,
        title: "Amazon RDS vs DynamoDB",
        category: "database",
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        content: "<p>While Amazon RDS is a fantastic relational database, it fundamentally remains far <em>less operationally efficient</em> (meaning it requires more administrative burden) than a strictly serverless NoSQL solution like DynamoDB when building a highly scalable solution.</p>"
    },
    {
        id: 42,
        title: "S3 Glacier Deep Archive",
        category: "storage",
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        content: "<p>Amazon S3's <strong>absolute lowest cost</strong> storage class explicitly designed for strictly regulated long-term retention (e.g. securely holding records for 7-10 years). Data retrieval takes 12 to 48 hours.</p>"
    },
    {
        id: 43,
        title: "S3 Glacier Flexible Retrieval",
        category: "storage",
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        content: "<p>An archival storage class that perfectly balances extremely low costs with reliable recovery. It is faster but more expensive than Deep Archive, granting you the <strong>flexibility</strong> to rapidly pull large data sets if a disaster hits.</p>"
    },
    {
        id: 44,
        title: "AWS Storage Gateway",
        category: "storage",
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        content: "<p>A unique hybrid cloud service utilizing a virtual appliance that grants your established <strong>on-premises environments</strong> direct, highly secure, and seamless access to virtually unlimited AWS cloud storage.</p>"
    },
    {
        id: 45,
        title: "Amazon EC2 Auto Scaling",
        category: "compute",
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        content: "<p>An entity that automatically ensures you inherently have the absolute <strong>correct number of EC2 instances</strong> actively running to smoothly handle the fluctuating current traffic demand.</p>"
    },
    {
        id: 46,
        title: "Auto Scaling Group Dimensions",
        category: "compute",
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        content: "<p>When configuring Auto Scaling, you decisively establish a <strong>minimum size, maximum size, and desired capacity</strong>. AWS automatically launches or completely terminates instances exclusively within those parameters.</p>"
    },
    {
        id: 47,
        title: "Network Load Balancer",
        category: "networking",
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        content: "<p>An incredibly fast load balancer perfectly suited for balancing raw <strong>TCP, UDP, and TLS</strong> traffic where extreme performance is specifically required. It strictly <em>distributes</em> traffic; it does <em>not</em> scale underlying resources.</p>"
    },
    {
        id: 48,
        title: "Application Load Balancer",
        category: "networking",
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        content: "<p>An intelligent layer-7 balancer fundamentally serving as a single point of contact intelligently distributing incoming application traffic across targets. It rigidly <em>routes traffic</em> rather than actively scaling resources.</p>"
    },
    {
        id: 49,
        title: "APN Consulting Partners",
        category: "networking",
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        content: "<p>Professional services firms heavily specialized to help customers systematically design, architect, build, and seamlessly <strong>migrate</strong> their complex workloads completely onto the AWS Cloud.</p>"
    },
    {
        id: 50,
        title: "APN Technology Partners",
        category: "networking",
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        content: "<p>Partners that strictly provide fundamental <strong>hardware, connectivity services, or specialized software</strong> integrated deeply with AWS. Crucially, they do <em>not</em> perform direct professional system migration consulting.</p>"
    },
    {
        id: 51,
        title: "AWS Concierge Support Team",
        category: "networking",
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        content: "<p>Exclusive AWS billing and account experts permanently assigned exclusively to users solely on the massive <strong>Enterprise Support plan</strong>. They explicitly manage massive billing inquiries, <em>not</em> architectural migrations.</p>"
    },
    {
        id: 52,
        title: "Amazon Macie",
        category: "security",
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        content: "<p>A fully managed security and privacy service utilizing heavy <strong>machine learning and pattern matching</strong> natively to automatically discover, classify, and securely protect hugely sensitive data (like PII) strictly inside Amazon S3.</p>"
    },
    {
        id: 53,
        title: "AWS Secrets Manager",
        category: "security",
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        content: "<p>Brilliant service enabling you to easily automatically <strong>rotate, manage, and retrieve</strong> critical database credentials and API keys via direct API calls—completely eliminating the incredibly unsafe practice of hardcoding plain-text secrets.</p>"
    },
    {
        id: 54,
        title: "AWS Glue",
        category: "database",
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        content: "<p>A fully managed modern <strong>Extract, Transform, and Load (ETL)</strong> service flawlessly making it easy for customers to dynamically prepare and load massive batch data strictly for intense analytics processing.</p>"
    },
    {
        id: 55,
        title: "Amazon Polly",
        category: "compute",
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        content: "<p>An incredibly advanced deep learning AWS service that magically turns plain text into highly engaging and strictly <strong>lifelike human speech</strong>, natively opening doors to dynamically talking applications.</p>"
    },
    {
        id: 56,
        title: "AWS Fargate",
        category: "compute",
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        content: "<p>The ultimate <strong>serverless compute engine for containers</strong> (working flawlessly with both ECS and EKS). It inherently completely removes your burden to explicitly provision or meticulously manage any underlying servers.</p>"
    },
    {
        id: 57,
        title: "AWS Elastic Beanstalk",
        category: "compute",
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        content: "<p>A brilliant deployment service explicitly designed so you can simply upload your raw code and automatically deploy scalable web apps. Because it natively provisions actual servers behind the scenes, it is intrinsically <em>not serverless</em>.</p>"
    },
    {
        id: 58,
        title: "Amazon SNS",
        category: "networking",
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        content: "<p>The Simple Notification Service natively acts as a highly durable <strong>pub/sub messaging service</strong> structurally enabling you to brilliantly decouple complex microservices, distributed systems, and strictly serverless applications.</p>"
    },
    {
        id: 59,
        title: "Amazon SageMaker",
        category: "compute",
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        content: "<p>A fully managed modern powerhouse perfectly equipping every developer inherently with the seamless ability to quickly <strong>build, thoroughly train, and intelligently deploy powerful machine learning (ML) models</strong>.</p>"
    },
    {
        id: 60,
        title: "S3 Standard Latency",
        category: "storage",
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        content: "<p>Amazon S3 Standard acts precisely as your default highly durable storage explicitly for frequently accessed data. Crucially, its first byte latency (retrieval time) operates blazingly fast in <strong>milliseconds</strong>.</p>"
    },
    {
        id: 61,
        title: "S3 Intelligent-Tiering Latency",
        category: "storage",
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        content: "<p>Intelligent-Tiering automatically optimizes costs by actively moving isolated data intelligently between dynamic access tiers. Despite this rich automation, its first byte latency remarkably remains tightly inside <strong>milliseconds</strong>.</p>"
    },
    {
        id: 62,
        title: "S3 Glacier Latencies",
        category: "storage",
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        content: "<p>First-byte latency inherently escalates drastically across Glacier tiers. <em>Flexible Retrieval</em> takes exactly <strong>minutes or hours</strong>, while the ultra-cheap <em>Deep Archive</em> rigidly requires <strong>12 to 48 hours</strong> to begin fetching.</p>"
    },
    {
        id: 63,
        title: "Well-Architected: Operational Excellence",
        category: "compute",
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        content: "<p>This pillar intensely focuses on successfully running and monitoring systems continuously. It explicitly recommends beautifully automating your entire environment natively completely as <strong>Infrastructure as Code (IaC)</strong>.</p>"
    },
    {
        id: 64,
        title: "Well-Architected: Cost Optimization",
        category: "compute",
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        content: "<p>Emphasizes brilliantly avoiding unnecessary IT expenses precisely by rigorously selecting strictly perfectly sized resources and fiercely dynamically analyzing spend naturally over time to actively prevent overspending.</p>"
    },
    {
        id: 65,
        title: "Well-Architected: Performance Efficiency",
        category: "compute",
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        content: "<p>Focuses inherently on dynamically heavily leveraging computing resources flawlessly to directly meet strict system requirements, uniquely maintaining tight efficiency actively heavily as business needs fiercely evolve.</p>"
    },
    {
        id: 66,
        title: "Well-Architected: Security",
        category: "security",
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        content: "<p>Concentrates extremely heavily precisely on deeply protecting fundamentally confidential data and critical system integrity directly through strict privilege management and actively establishing automated reactive breach detection.</p>"
    },
    {
        id: 67,
        title: "AWS Trusted Advisor",
        category: "compute",
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        content: "<p>An online tool actively providing real-time best practice guidance (e.g., intelligently identifying <strong>underused/unattached EBS volumes</strong> to tightly optimize cost). Checks broadly across Cost Optimization, Performance, Security, Fault Tolerance, and Limits.</p>"
    },
    {
        id: 68,
        title: "AWS Config",
        category: "security",
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        content: "<p>Service built exclusively to easily audit, continuously monitor, and systematically assess the exact <strong>configurations</strong> of your active AWS resources flawlessly against highly desired compliance states. Think strictly <em>resource change history</em>.</p>"
    },
    {
        id: 69,
        title: "Amazon CloudWatch",
        category: "compute",
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        content: "<p>The core AWS powerful monitoring and profound observability service flawlessly generating extremely actionable metrics natively to actively respond to dynamic <strong>system-wide performance changes</strong>.</p>"
    },
    {
        id: 70,
        title: "Amazon Inspector",
        category: "security",
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        content: "<p>A fully automated highly specific security assessment service explicitly designed to actively evaluate exclusively your exact <strong>EC2 instances</strong> and hosted applications deeply for inherently dangerous network exposure and pure vulnerabilities.</p>"
    },
    {
        id: 71,
        title: "AWS CloudTrail",
        category: "security",
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        content: "<p>Logs, monitors, and retains complete <strong>account activity</strong> across your entire AWS infrastructure — including console, SDK, and CLI actions. The go-to service for governance, compliance, and auditing.</p>"
    },
    {
        id: 72,
        title: "CloudWatch vs CloudTrail vs Config",
        category: "security",
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        content: "<p>🔑 Exam Thumb Rule:<br>• <strong>CloudWatch</strong> → Resource <em>performance</em> monitoring, events &amp; alerts<br>• <strong>CloudTrail</strong> → <em>Account activity</em> &amp; audit<br>• <strong>Config</strong> → Resource <em>config change history</em> &amp; compliance</p>"
    },
    {
        id: 73,
        title: "Amazon EventBridge Scheduler",
        category: "compute",
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        content: "<p>A fully <strong>serverless task scheduler</strong> that triggers AWS services on a defined schedule (e.g. every Monday at 2 AM) without provisioning or managing any underlying infrastructure.</p>"
    },
    {
        id: 74,
        title: "AWS Lambda",
        category: "compute",
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        content: "<p>Run code completely <strong>without provisioning or managing servers</strong>. Pay only for the compute time consumed. Max execution time is <strong>15 minutes</strong>, making it perfect for short scheduled tasks like log backups.</p>"
    },
    {
        id: 75,
        title: "AWS Step Functions",
        category: "compute",
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        content: "<p>Coordinates multiple AWS services into serverless <strong>workflows</strong> (e.g. stitching Lambda, Glue, and SageMaker together). It <em>orchestrates</em> services but cannot independently trigger or schedule processes.</p>"
    },
    {
        id: 76,
        title: "AWS Systems Manager",
        category: "compute",
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        content: "<p>Provides unified visibility and <strong>operational control</strong> over your AWS infrastructure. Groups and automates tasks across EC2, S3, RDS, etc. — but cannot run processes on a cron schedule.</p>"
    },
    {
        id: 77,
        title: "AWS Partner Solutions (Quick Starts)",
        category: "compute",
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        content: "<p>Automated reference deployments built by AWS architects and partners. Reduces hundreds of manual steps to a few clicks, letting you <strong>rapidly deploy popular technologies</strong> using AWS best practices in minutes.</p>"
    },
    {
        id: 78,
        title: "Always-Free AWS Services",
        category: "security",
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        content: "<p>Two key services are always completely free:<br>• <strong>AWS IAM</strong> — manage users, groups &amp; permissions at no charge<br>• <strong>AWS Auto Scaling</strong> — pay only for the underlying resources, not the scaling service itself</p>"
    },
    {
        id: 79,
        title: "AWS CloudFormation",
        category: "compute",
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        content: "<p>Deploy and manage <strong>identical infrastructure across all AWS regions and accounts</strong> using reusable templates (JSON/YAML). Also supports <em>cost estimation</em> directly from a template before provisioning.</p>"
    },
    {
        id: 80,
        title: "AWS Cost Explorer",
        category: "compute",
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        content: "<p>Visualizes, understands, and <strong>forecasts</strong> your AWS costs and usage over time. Also provides <em>rightsizing recommendations</em> to spot under-utilized EC2 instances across linked accounts — no manual config needed.</p>"
    },
    {
        id: 81,
        title: "Cost Tools: Explorer vs Budgets vs CUR vs Calculator",
        category: "compute",
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        content: "<p>🔑 Exam Thumb Rule:<br>• <strong>Cost Explorer</strong> → Visualize history &amp; <em>forecast</em> costs<br>• <strong>Budgets</strong> → Alert when costs <em>exceed</em> a threshold<br>• <strong>CUR</strong> → Most comprehensive raw billing <em>report</em><br>• <strong>Pricing Calculator</strong> → Estimate costs <em>before</em> building</p>"
    },
    {
        id: 82,
        title: "AWS Budgets",
        category: "compute",
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        content: "<p>Set custom cost or usage <strong>thresholds and receive alerts</strong> when spending is forecasted to exceed them. Can track monthly, quarterly, or yearly — but cannot identify under-utilized resources without manual config.</p>"
    },
    {
        id: 83,
        title: "AWS Health Dashboards",
        category: "compute",
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        content: "<p>🔑 Two dashboards, different scopes:<br>• <strong>Service Health Dashboard</strong> → General status of ALL AWS services globally<br>• <strong>Your Account Health Dashboard</strong> → Personalized alerts &amp; remediation for <em>your specific resources</em></p>"
    },
    {
        id: 84,
        title: "Auto-Encrypted AWS Services",
        category: "security",
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        content: "<p>Two services encrypt data <strong>by default automatically</strong>:<br>• <strong>Amazon S3</strong> — SSE-S3 encryption on all objects by default<br>• <strong>AWS Storage Gateway</strong> — all data in transit encrypted via SSL<br><em>EBS, EFS, and Redshift require encryption to be explicitly enabled.</em></p>"
    },
    {
        id: 85,
        title: "AWS IAM Identity Center",
        category: "security",
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        content: "<p>Successor to AWS SSO. Centralizes <strong>Single Sign-On access across multiple AWS accounts</strong> and SAML-enabled apps (Salesforce, Microsoft 365, etc.) from one unified administration portal.</p>"
    },
    {
        id: 86,
        title: "AWS Cognito",
        category: "security",
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        content: "<p>Identity management for <strong>app customers (B2C/B2B)</strong>. Adds user sign-up, sign-in, and access control to web/mobile apps. Supports social providers (Facebook, Google) and SAML. <em>Not</em> for managing AWS account access.</p>"
    },
    {
        id: 87,
        title: "Penetration Testing on AWS",
        category: "security",
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        content: "<p>AWS customers can conduct <strong>security assessments / penetration tests</strong> against their own AWS infrastructure for common services <em>without prior approval</em> from AWS. You cannot test AWS infrastructure itself.</p>"
    },
    {
        id: 88,
        title: "AWS Marketplace",
        category: "compute",
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        content: "<p>A digital catalog where sellers list software as <strong>AMIs or SaaS solutions</strong> for AWS customers to buy, test, and deploy. <em>Not</em> for purchasing Reserved Instances, Direct Connect, or compliance documents.</p>"
    },
    {
        id: 89,
        title: "AWS Organizations",
        category: "compute",
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        content: "<p>Centrally manages multiple AWS accounts. Key benefits:<br>• <strong>Volume discounts</strong> on EC2 &amp; S3 aggregated across all member accounts<br>• <strong>Share Reserved Instances</strong> across accounts<br>• Single consolidated billing payment method</p>"
    },
    {
        id: 90,
        title: "Amazon CloudWatch Logs",
        category: "compute",
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        content: "<p>Can centralize logs from <strong>both EC2 instances AND on-premises servers</strong> into a single scalable service. Supports monitoring, searching, filtering, and secure archiving of logs from any source.</p>"
    },
    {
        id: 91,
        title: "Shared Responsibility Model",
        category: "security",
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        content: "<p>\u2022 <strong>AWS</strong> \u2192 Security <em>'of'</em> the Cloud (<strong>Physical and Environmental controls</strong>, hardware, infra, global network)<br>\u2022 <strong>Customer</strong> \u2192 Security <em>'in'</em> the Cloud (<strong>Patching Guest OS</strong>, <strong>Configuring Apps</strong>, <strong>Zone Security</strong>, data, firewall)<br>\u2022 For <strong>S3/DynamoDB</strong>, AWS manages the OS &amp; platform too</p>"
    },
    {
        id: 92,
        title: "AWS X-Ray",
        category: "compute",
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        content: "<p>Analyze and <strong>debug serverless and distributed/microservices applications</strong>. Provides an end-to-end view of requests to identify root causes of performance issues and errors across services.</p>"
    },
    {
        id: 93,
        title: "Amazon Pinpoint",
        category: "compute",
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        content: "<p>Customer engagement platform for <strong>marketers and developers</strong>. Delivers targeted campaigns via email, SMS, voice, and push notifications. Captures usage data for real-time insights — <em>not</em> a debugging tool.</p>"
    },
    {
        id: 94,
        title: "Systems Manager Session Manager",
        category: "security",
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        content: "<p>Provides <strong>secure browser-based shell / CLI access to EC2 instances</strong> with <em>no open inbound ports</em>, no bastion hosts, and no SSH key management required. Fully auditable.</p>"
    },
    {
        id: 95,
        title: "AWS CloudHSM",
        category: "security",
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        content: "<p>A cloud-based <strong>Hardware Security Module (HSM)</strong> for generating and managing encryption keys using FIPS 140-2 Level 3 validated hardware. Required when regulations mandate a physical hardware device for encryption.</p>"
    },
    {
        id: 96,
        title: "AWS KMS vs CloudHSM",
        category: "security",
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        content: "<p>• <strong>AWS KMS</strong> → Managed key management, shared hardware, broad AWS service integration<br>• <strong>CloudHSM</strong> → Dedicated physical HSM hardware, FIPS 140-2 Level 3, required for strict compliance needing <em>customer-controlled</em> hardware</p>"
    },
    {
        id: 97,
        title: "VPC Peering",
        category: "networking",
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        content: "<p>A <strong>private networking connection between two VPCs</strong> enabling them to communicate as if on the same network. Works across accounts and regions. <em>Not</em> a gateway or VPN — no single point of failure.</p>"
    },
    {
        id: 98,
        title: "Amazon ECS vs Fargate",
        category: "compute",
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        content: "<p>• <strong>Amazon ECS</strong> → Run Docker containers with <em>access to the underlying servers</em> (you manage the cluster)<br>• <strong>AWS Fargate</strong> → Fully serverless containers, <em>no server access</em>, AWS manages all infrastructure</p>"
    },
    {
        id: 99,
        title: "Amazon ECR",
        category: "compute",
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        content: "<p>Elastic Container Registry — a managed service to <strong>store, manage, and deploy Docker container images</strong>. It is a container image registry, <em>not</em> a container execution runtime.</p>"
    },
    {
        id: 100,
        title: "Amazon Redshift",
        category: "database",
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        content: "<p>A fully managed, petabyte-scale cloud <strong>data warehouse</strong> built for large-scale data set storage and deep analytics. Requires a well-defined schema — <em>not</em> schemaless like DynamoDB.</p>"
    },
    {
        id: 101,
        title: "S3 One Zone-IA for Thumbnails",
        category: "storage",
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        content: "<p>Best for infrequently accessed, <strong>recreatable objects</strong> (e.g. thumbnails) needing instant retrieval. Stores in a single AZ at lower cost than Standard-IA. <em>Not</em> suitable for data that cannot be reproduced.</p>"
    },
    {
        id: 102,
        title: "DynamoDB Global Tables",
        category: "database",
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        content: "<p>Enables fully managed <strong>active-active multi-region replication</strong> for DynamoDB. All replicas can accept reads and writes, giving globally distributed apps single-digit millisecond latency anywhere in the world.</p>"
    },
    {
        id: 103,
        title: "DynamoDB Accelerator (DAX)",
        category: "database",
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        content: "<p>An <strong>in-memory cache</strong> for DynamoDB that improves read performance up to 10x — from milliseconds to microseconds at millions of requests/sec. <em>Not</em> for active-active cross-region replication.</p>"
    },
    {
        id: 104,
        title: "Six Advantages of Cloud Computing",
        category: "compute",
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        content: "<p>1. Trade <strong>CapEx for OpEx</strong><br>2. Massive <strong>economies of scale</strong><br>3. <strong>Stop guessing capacity</strong><br>4. <strong>Increase speed &amp; agility</strong><br>5. Stop spending on data centers<br>6. <strong>Go global in minutes</strong></p>"
    },
    {
        id: 105,
        title: "AWS Local Zones",
        category: "networking",
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        content: "<p>Extends AWS compute and storage <strong>closer to end-users</strong> for ultra-low-latency workloads (e.g. gaming, live streaming). Connected to the parent region via a high-bandwidth private network. <em>Not</em> the same as Edge Locations.</p>"
    },
    {
        id: 106,
        title: "AWS Edge Locations vs Local Zones vs Wavelength",
        category: "networking",
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        content: "<p>🔑 Exam Thumb Rule:<br>• <strong>Edge Locations</strong> → CloudFront CDN caching only<br>• <strong>Local Zones</strong> → Full compute/storage near population centers for low latency<br>• <strong>Wavelength</strong> → Ultra-low latency at 5G carrier network edge</p>"
    },
    {
        id: 107,
        title: "Block-Level Storage Services",
        category: "storage",
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        content: "<p>Two AWS services offer <strong>block-level storage</strong>:<br>• <strong>Amazon EBS</strong> — high-performance block storage for EC2 (persistent)<br>• <strong>Instance Store</strong> — temporary block storage physically attached to host (lost on stop/terminate)</p>"
    },
    {
        id: 108,
        title: "AWS Compute Optimizer",
        category: "compute",
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        content: "<p>Uses ML to analyze utilization metrics and deliver <strong>rightsizing recommendations</strong> for: <strong>EC2 instances</strong>, <strong>EC2 Auto Scaling groups</strong>, <strong>EBS volumes</strong>, and <strong>Lambda functions</strong>. Does <em>not</em> support EFS or S3.</p>"
    },
    {
        id: 109,
        title: "AWS Serverless Services",
        category: "compute",
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        content: "<p>Key <strong>serverless</strong> services on AWS:<br>• <strong>AWS Lambda</strong> — serverless code execution<br>• <strong>AWS Fargate</strong> — serverless containers (ECS/EKS)<br><em>Not serverless: EC2, Elastic Beanstalk (provisions servers), Lightsail</em></p>"
    },
    {
        id: 110,
        title: "Amazon Lightsail",
        category: "compute",
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        content: "<p>The easiest way to launch and manage a <strong>virtual private server (VPS)</strong> on AWS. Provides pre-configured stacks (WordPress, LAMP, etc.) at a predictable monthly price. Best for simple apps — <em>not serverless</em>.</p>"
    },
    {
        id: 111,
        title: "Route 53 Routing Policies",
        category: "networking",
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        content: "<p>🔑 Key policies:<br>• <strong>Weighted</strong> → Split traffic across resources by assigned weight (%)<br>• <strong>Latency-based</strong> → Route to region with lowest latency<br>• <strong>Failover</strong> → Active-passive failover<br>• <strong>Simple</strong> → Single resource, no logic</p>"
    },
    {
        id: 112,
        title: "Amazon Aurora",
        category: "database",
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        content: "<p>A fully managed <strong>relational</strong> database engine (MySQL &amp; PostgreSQL compatible). Up to 5x throughput of MySQL. Multi-master clusters allow all DB instances to read/write — but it is <em>not</em> a NoSQL database.</p>"
    },
    {
        id: 113,
        title: "Service Health Dashboard & RSS Feed",
        category: "compute",
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        content: "<p>The <strong>AWS Health Dashboard – Service Health</strong> is the single place to view the global availability of all AWS services. It uniquely offers an <strong>RSS feed subscription</strong> to be notified of service interruptions.</p>"
    },
    {
        id: 114,
        title: "AWS Pricing Calculator & Migration Evaluator",
        category: "compute",
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        content: "<p>• <strong>AWS Pricing Calculator</strong> — model/estimate AWS costs <em>before</em> building; ideal for comparing on-premises vs cloud costs<br>• <strong>Migration Evaluator</strong> (formerly TSO Logic) — creates data-driven business cases specifically for cloud migration planning</p>"
    },
    {
        id: 115,
        title: "Amazon Transcribe",
        category: "compute",
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        content: "<p>Uses deep learning (ASR) to convert <strong>speech → text</strong>. Great for transcribing calls, generating subtitles, and creating media metadata. Pairs with Amazon Polly for full speech-in/speech-out applications.</p>"
    },
    {
        id: 116,
        title: "Polly vs Transcribe vs Translate",
        category: "compute",
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        content: "<p>🔑 Exam Thumb Rule:<br>• <strong>Transcribe</strong> → <em>Speech to Text</em> (ASR)<br>• <strong>Polly</strong> → <em>Text to Speech</em> (TTS)<br>• <strong>Translate</strong> → <em>Language translation</em> (text → text)<br>For speech I/O apps: Transcribe (input) + Polly (output)</p>"
    },
    {
        id: 117,
        title: "Services Supporting Reservations",
        category: "compute",
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        content: "<p>The following AWS services support <strong>reservations to optimize costs</strong>:<br>• <strong>Amazon EC2</strong> (Reserved Instances)<br>• <strong>Amazon DynamoDB</strong> (Reserved Capacity)<br>• <strong>Amazon RDS</strong> (Reserved Instances)<br>• <strong>Amazon ElastiCache</strong> (Reserved Nodes)<br>• <strong>Amazon Redshift</strong> (Reserved Nodes)</p>"
    },
    {
        id: 118,
        title: "AWS Direct Connect vs VPN",
        category: "networking",
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        content: "<p><strong>AWS Direct Connect</strong> connects an on-premises environment directly to a VPC via a dedicated connection that does <em>not</em> use the public internet.<br><br>\ud83d\udd11 Exam Thumb Rule:<br>\u2022 <strong>Direct Connect</strong> \u2192 Private physical connection, avoids public internet.<br>\u2022 <strong>Site-to-Site VPN</strong> \u2192 Secure encrypted connection that uses the <em>public internet</em>.<br>\u2022 <strong>VPC Endpoint</strong> \u2192 Connects VPC privately to <em>AWS services</em>, not on-premises.</p>"
    },
    {
        id: 119,
        title: "AWS Shield (Standard vs Advanced)",
        category: "security",
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        content: "<p><strong>AWS Shield Standard</strong> is enabled for all AWS customers automatically at <strong>no additional cost</strong>. It defends against most common network and transport layer DDoS attacks.<br><br>\ud83d\udd11 Exam Thumb Rule:<br>\u2022 <strong>Shield Standard</strong> \u2192 Free, automatic DDoS protection (Layer 3 & 4) for all customers.<br>\u2022 <strong>Shield Advanced</strong> \u2192 Paid service, adds intelligent Layer 7 protection for internet-facing apps.<br>\u2022 <strong>AWS WAF</strong> \u2192 Web Application Firewall (Paid), protects against common web exploits (like SQLi, XSS).</p>"
    },
    {
        id: 120,
        title: "OS Patching (Amazon Aurora)",
        category: "database",
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        content: "<p><strong>Amazon Aurora</strong> is a fully managed relational database by Amazon RDS. The <strong>AWS Product Team automatically</strong> applies patches to the underlying OS.<br><br>\ud83d\udd11 Exam Thumb Rule:<br>\u2022 <strong>Aurora OS Patching</strong> \u2192 Handled automatically by AWS.<br>\u2022 <strong>EC2 / On-Prem OS Patching</strong> \u2192 Handled by the <em>Customer</em> (e.g., via AWS Systems Manager or SSH).<br>\u2022 AWS Support handles tickets, <em>not</em> patching requests.</p>"
    },
    {
        id: 121,
        title: "AWS Cloud Adoption Framework (CAF)",
        category: "compute",
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        content: "<p>The <strong>AWS CAF</strong> helps organizations digitally transform by organizing teams around <strong>products and value streams</strong> and leveraging <strong>agile methods</strong> to rapidly iterate and become more responsive to customer inquiries.</p>"
    },
    {
        id: 122,
        title: "AWS Elastic Load Balancing (ELB)",
        category: "networking",
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        content: "<p><strong>Elastic Load Balancing (ELB)</strong> automatically distributes incoming application traffic across multiple targets (like EC2 instances). It acts as a single point of contact and ensures no single instance is overwhelmed.</p>"
    },
    {
        id: 123,
        title: "VPC Gateway Endpoints",
        category: "networking",
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        content: "<p>A VPC endpoint privately connects your VPC to supported AWS services <strong>without</strong> needing an internet gateway. <br><br>\ud83d\udd11 Exam Thumb Rule:<br>\u2022 <strong>Gateway Endpoints</strong> \u2192 ONLY supported by <strong>Amazon S3</strong> and <strong>Amazon DynamoDB</strong>.<br>\u2022 <strong>Interface Endpoints</strong> \u2192 Used by all other supported services (powered by AWS PrivateLink).</p>"
    },
    {
        id: 124,
        title: "AWS Artifact",
        category: "security",
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        content: "<p><strong>AWS Artifact</strong> is a free, self-service portal for on-demand access to AWS <strong>compliance reports</strong> (like SOC/PCI) and online agreements (like HIPAA / BAA). It is specifically used to verify governance and compliance guidelines.</p>"
    },
    {
        id: 125,
        title: "Migration: Replatforming",
        category: "compute",
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        content: "<p><strong>Replatforming</strong> involves moving an application to the cloud with a few optimizations without fundamentally changing the core architecture. <br>\u2022 Example: Migrating a self-managed MySQL database to <strong>Amazon RDS</strong> to reduce operational overhead.</p>"
    },
    {
        id: 126,
        title: "AWS Shield Advanced Resources",
        category: "security",
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        content: "<p><strong>AWS Shield Advanced</strong> extends intelligent DDoS protection (up to layer 7) precisely for web applications running on: <strong>EC2</strong>, <strong>Elastic Load Balancing (ELB)</strong>, <strong>Amazon CloudFront</strong>, <strong>AWS Global Accelerator</strong>, and <strong>Amazon Route 53</strong>.</p>"
    },
    {
        id: 127,
        title: "Reliability Pillar: Fault Tolerance",
        category: "compute",
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        content: "<p>In the AWS Well-Architected Framework, Fault Tolerance is explicitly achieved by <strong>scaling out (horizontal scaling)</strong>. Scaling up (vertical scaling) inherently relies on a single computer, which remains a single point of failure.</p>"
    },
    {
        id: 128,
        title: "AWS Support Plans & Architecture",
        category: "compute",
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        content: "<p>\ud83d\udd11 Exam Thumb Rule for Architectural Guidance:<br>\u2022 <strong>Developer Support</strong> \u2192 <em>General</em> architectural guidance.<br>\u2022 <strong>Business Support</strong> \u2192 Guidance contextual to your <em>specific use-cases</em>.<br>\u2022 <strong>Enterprise Support</strong> \u2192 Consultative guidance contextual to your <em>application</em>.</p>"
    },
    {
        id: 129,
        title: "Decoupling Microservices (SQS & SNS)",
        category: "compute",
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        content: "<p>\ud83d\udd11 Exam Thumb Rule:<br>To <strong>decouple</strong> components of a microservices-based application, you should primarily use messaging services:<br>\u2022 <strong>Amazon SQS</strong> (Simple Queue Service) \u2192 stores queued messages.<br>\u2022 <strong>Amazon SNS</strong> (Simple Notification Service) \u2192 pub/sub messaging to fan out.<br><em>Services like EC2, Lambda, or Step Functions are execution or orchestration engines; they are NOT decoupling messaging buffers themselves.</em></p>"
    }
];

// Helper to assign colors to tags based on category
function getCategoryClass(category) {
    const categories = {
        'compute': 'tag-compute',
        'storage': 'tag-storage',
        'database': 'tag-database',
        'security': 'tag-security',
        'networking': 'tag-networking',
        'welcome': 'tag' // default orange
    };
    return categories[(category || '').toLowerCase()] || 'tag';
}

// State
let activeCategory = 'all';
let searchQuery = '';

function renderNotes() {
    const container = document.getElementById('notes-container');
    container.innerHTML = ''; // Clear current

    let filtered = notesData.slice();

    if (activeCategory && activeCategory !== 'all') {
        filtered = filtered.filter(n => (n.category || '').toLowerCase() === activeCategory);
    }

    if (searchQuery && searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        filtered = filtered.filter(n => {
            const titleMatch = (n.title || '').toLowerCase().includes(q);
            const contentText = (n.content || '').replace(/<[^>]*>?/gm, '').toLowerCase(); // strip html
            const contentMatch = contentText.includes(q);
            const categoryMatch = (n.category || '').toLowerCase().includes(q);
            return titleMatch || contentMatch || categoryMatch;
        });
    }

    if (filtered.length === 0) {
        const msg = searchQuery ? 'No notes match your search.' : 'No notes in this category yet. Keep adding!';
        container.innerHTML = `<p style="color: var(--text-secondary); text-align: center; grid-column: 1 / -1; padding: 2rem;">${msg}</p>`;
        return;
    }

    filtered.forEach(note => {
        const article = document.createElement('article');
        article.className = 'note-card glass-card';
        
        const catClass = getCategoryClass(note.category);

        article.innerHTML = `
            <div class="note-header">
                <span class="tag ${catClass}">${note.category.charAt(0).toUpperCase() + note.category.slice(1)}</span>
            </div>
            <h3>${note.title}</h3>
            <div class="note-content">${note.content}</div>
        `;

        container.appendChild(article);
    });
}

function setupSearch() {
    const input = document.getElementById('search-input');
    if (!input) return;
    input.addEventListener('input', (e) => {
        searchQuery = e.target.value;
        renderNotes();
    });
}

function setupFilters() {
    const filterLinks = document.querySelectorAll('#category-filters a');
    
    filterLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Remove active class from all
            filterLinks.forEach(l => l.classList.remove('active'));
            // Add active class to clicked
            link.classList.add('active');
            
            activeCategory = link.getAttribute('data-cat');
            renderNotes();
        });
    });
}

function setupScrollTop() {
    const topBtn = document.getElementById('scroll-top');
    if (!topBtn) return;
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            topBtn.classList.add('visible');
        } else {
            topBtn.classList.remove('visible');
        }
    }, { passive: true });
    
    topBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

function setupThemeToggle() {
    const themeBtn = document.getElementById('theme-toggle');
    themeBtn.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');
        
        if(document.body.classList.contains('light-mode')) {
            themeBtn.innerHTML = '🌙 Dark Mode';
        } else {
            themeBtn.innerHTML = '💡 Light Mode';
        }
    });
}

// Initial setup
document.addEventListener('DOMContentLoaded', () => {
    setupSearch();
    setupFilters();
    setupThemeToggle();
    setupScrollTop();
    renderNotes();
});
