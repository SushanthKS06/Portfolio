import { Profile, SkillCategory } from "@/types";

export const profile: Profile = {
    name: "Sushanth K S",
    headline: "Backend, Systems & AI/ML Engineer",
    subHeadline: "Backend & AI/ML engineer building fast, dependable distributed systems, ML Models and intelligent pipelines that scale and actually work.",
    location: "India",
    email: "k.s.sushanth06@gmail.com",
    social: {
        github: "https://github.com/SushanthKS06",
        linkedin: "https://www.linkedin.com/in/sushanth-k-s-a10933235/",
    },
    about: [
        "I am a backend, systems, and data-focused engineer with a passion for building correct, high-performance software.",
        "My work bridges the gap between complex distributed architecture and practical, measurable business impact. I don't just build features; I design systems that handle scale, failure, and evolution.",
        "I am looking for roles where I can apply my deep understanding of concurrency, data pipelines, and reliability engineering to solve hard problems."
    ]
};

export const skillCategories: SkillCategory[] = [
    {
        category: "Systems & Backend",
        skills: [
            "Python","Java", "Go (Golang)", "Rust", "C++",
            "Distributed Systems", "Microservices", "gRPC", "Protobuf", "GraphQL",
            "Concurrency", "Multithreading", "Memory Management", "Spring", "Spring Boot", "Django", "Flask", "FastAPI",
            "Redis", "Kafka", "RabbitMQ", "Nats.io"
        ]
    },
    {
        category: "Quantitative & Analytics",
        skills: [
            "Python (Pandas, NumPy)", "Backtesting.py", "Market Microstructure",
            "Order Book Dynamics", "Algorithmic Trading", "Time Series Analysis",
            "Statistical Modeling", "Low Latency C++", "Aeron"
        ]
    },
    {
        category: "Data Engineering",
        skills: [
            "SQL (PostgreSQL, MySQL)", "Apache Spark", "Airflow","Hadoop","Hive","PySpark", "ETL Pipelines",
            "Data Warehousing (Snowflake, BigQuery)", "Elasticsearch", "ClickHouse",
            "Vector Databases (Pinecone, ChromaDB)", "Cassandra", "HBase","MongoDB","Redis"
        ]
    },
    {
        category: "AI / ML / GenAI",
        skills: [
            "PyTorch", "TensorFlow", "Scikit-Learn","NLP","Transformers","Machine Learning","Deep Learning","Computer Vision","Reinforcement Learning", "HuggingFace Transformers",
            "LLMs (Llama 2, GPT-4)", "RAG (Retrieval-Augmented Generation)", "CrewAI","LangGraph",
            "LangChain", "Graph Neural Networks (PyTorch Geometric)", "MLOps"
        ]
    },
    {
        category: "Frontend & Product",
        skills: [
            "React.js", "Next.js (App Router)", "TypeScript", "Tailwind CSS",
            "Framer Motion", "Shadcn/UI", "Figma", "Performance Optimization (Lighthouse)"
        ]
    },
    {
        category: "Infrastructure & DevOps",
        skills: [
            "AWS", "GCP", "Kubernetes", "Docker", "Terraform",
            "CI/CD (GitHub Actions, Jenkins)", "Prometheus", "Grafana", "Linux Administration"
        ]
    }
];
