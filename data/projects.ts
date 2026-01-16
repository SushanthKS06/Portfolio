import { Project } from "@/types";

export const projects: Project[] = [
    {
        title: "Concurrent Event Processing Engine",
        description: "High-throughput, multithreaded backend for real-time data ingestion.",
        longDescription: [
            "Designed a non-blocking event loop architecture to handle 10K+ events/sec.",
            "Optimized thread contention using lock-free data structures (disruptor pattern).",
            "Implemented batched writes to Redis to maximize pipelining efficiency.",
            "Conducted extensive profiling with JProfiler to identify and eliminate GC pauses."
        ],
        techStack: ["Java", "Redis", "JProfiler", "Multithreading"],
        metrics: ["10K+ events/sec throughput", "p95 latency reduced by 38%"],
        githubUrl: "https://github.com/SushanthKS06/concurrent-engine", // Placeholder logic or assumption
        featured: true,
        priority: 1
    },
    {
        title: "Polyglot Microservices System",
        description: "gRPC-based distributed services with schema evolution guarantees.",
        longDescription: [
            "Migrated monolithic logic into 4 discrete microservices using gRPC for inter-service communication.",
            "Enforced strict backward compatibility using Protobuf schema versioning.",
            "Orchestrated deployment on Kubernetes with Helm charts for varying environments.",
            "Benchmarked serialization performance, achieving ~7x speedup over JSON/REST."
        ],
        techStack: ["Go", "gRPC", "Kubernetes", "Protobuf"],
        metrics: ["~7× faster serialization than REST", "Zero-downtime schema evolution"],
        githubUrl: "https://github.com/SushanthKS06/polyglot-services",
        featured: true,
        priority: 2
    },
    {
        title: "Fraud Detection using Graph Neural Networks",
        description: "Graph-based ML system for detecting anomalous transaction patterns.",
        longDescription: [
            "Modeled transaction data as a heterogeneous graph to capture relational dependencies.",
            "Tackled extreme class imbalance (1:1000) using focal loss and undersampling.",
            "Built a streaming inference pipeline to score transactions in near real-time.",
            "Achieved 91% recall at a strict 3% false positive rate constraint."
        ],
        techStack: ["Python", "PyTorch Geometric", "Kafka", "GraphSAGE"],
        metrics: ["91% recall @ 3% FPR", "Streaming inference capability"],
        githubUrl: "https://github.com/SushanthKS06/gnn-fraud-detection",
        featured: true,
        priority: 3
    },
    {
        title: "Ephemeral Vault System",
        description: "Secure, time-bound secret storage system with automatic expiration.",
        longDescription: [
            "Architected a 'shared-nothing' storage model to ensure strict isolation of secrets.",
            "Implemented a cleanup daemon to deterministically purge expired records.",
            "Designed a threat model focusing on data-at-rest encryption and access audit logging.",
            "Prioritized security correctness over feature bloat, minimizing the attack surface."
        ],
        techStack: ["Rust", "SQLite", "Cryptography", "Actix-web"],
        metrics: ["Zero leakage guarantee via memory-safe design", "Automatic expiration enforcement"],
        githubUrl: "https://github.com/SushanthKS06/ephemeral-vault",
        featured: true,
        priority: 4
    },
    {
        title: "Isolog — Structured Logging System",
        description: "Centralized log ingestion, indexing, and querying platform.",
        longDescription: [
            "Built a custom log ingestion pipeline capable of parsing structured JSON logs.",
            "Implemented correlation ID injection for end-to-end request tracing.",
            "Designed an efficient indexing strategy for rapid time-range queries.",
            "Focused on backend service observability and debuggability."
        ],
        techStack: ["Go", "Elasticsearch", "Fluentd"],
        metrics: ["Unified structured logging", "Trace correlation implementation"],
        githubUrl: "https://github.com/SushanthKS06/isolog",
        featured: true,
        priority: 5
    },
    {
        title: "Qumail — Distributed Email Pipeline",
        description: "Reliable, asynchronous email delivery system with retry logic.",
        longDescription: [
            "Decoupled email dispatch from user actions using persistent job queues.",
            "Implemented exponential backoff and jitter for resilient retry logic.",
            "Designed idempotency keys to prevent duplicate emails during network partitions.",
            "Integrated rate limiting to respect downstream SMTP provider quotas."
        ],
        techStack: ["Node.js", "RabbitMQ", "Redis", "SMTP"],
        metrics: ["Idempotent delivery guarantees", "Resilient backoff handling"],
        githubUrl: "https://github.com/SushanthKS06/qumail",
        featured: true,
        priority: 6
    },
    {
        title: "Low-Latency Market Data Pipeline",
        description: "High-frequency market data processing with minimal allocation.",
        longDescription: [
            "Processed ~1M events/min using a zero-copy buffer design.",
            "Optimized hot paths to minimize heap allocations and GC pressure.",
            "Designed cache-friendly data structures to improve CPU instruction cache hit rates.",
            "Instrumented precise histograms for p50/p95 latency monitoring."
        ],
        techStack: ["C++", "Aeron", "Linux API"],
        metrics: ["~1M events/min throughput", "Zero-copy architecture"],
        githubUrl: "https://github.com/SushanthKS06/market-data-pipeline",
        featured: true,
        priority: 7
    },
    {
        title: "Deterministic Exchange Simulator",
        description: "Event-driven matching engine enforcing market microstructure.",
        longDescription: [
            "Implemented a price-time priority matching algorithm.",
            "Ensured deterministic execution by sequencing all inputs through a single event log.",
            "Stress-tested the engine under simulated liquidity collapse scenarios.",
            "Verified correctness of order book state transitions."
        ],
        techStack: ["Java", "LMAX Disruptor", "JUnit"],
        metrics: ["Deterministic replay capability", "Market microstructure correctness"],
        githubUrl: "https://github.com/SushanthKS06/exchange-simulator",
        featured: true,
        priority: 8
    },
    {
        title: "Mini CI/CD Testing Pipeline",
        description: "Custom pre-merge pipeline to enforce code quality and coverage.",
        longDescription: [
            "Automated unit and integration test execution on every commit.",
            "Integrated coverage reports to block merges falling below thresholds.",
            "Reduced main branch regressions by gating incomplete features.",
            "Cut down CI flakiness by isolating test environments."
        ],
        techStack: ["Python", "Docker", "Jenkins", "Bash"],
        metrics: ["Prevented 30+ regressions", "Reduced CI flakiness by 25%"],
        githubUrl: "https://github.com/SushanthKS06/mini-cicd",
        featured: true,
        priority: 9
    },
    {
        title: "NLP Customer Support Automation",
        description: "Production-ready NLP pipeline for automated ticket tagging.",
        longDescription: [
            "Built a scalable NLP pipeline to classify customer support tickets.",
            "Implemented an active learning loop to continuously improve model performance.",
            "Focused on model deployment, versioning, and monitoring (MLOps).",
            "Prioritized practical utility and latency over pure academic accuracy benchmarks."
        ],
        techStack: ["Python", "FastAPI", "HuggingFace", "Scikit-learn"],
        metrics: ["Production-grade deployment", "Active learning feedback loop"],
        githubUrl: "https://github.com/SushanthKS06/nlp-support-bot",
        featured: true,
        priority: 10
    }
];
