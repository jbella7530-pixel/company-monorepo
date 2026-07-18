export type KnowledgeType =
  | "document"
  | "note"
  | "memory"
  | "instruction";

export interface KnowledgeItem {
  id: string;
  title: string;
  content: string;
  type: KnowledgeType;
  createdAt: Date;
}

export interface KnowledgeCreateInput {
  title: string;
  content: string;
  type: KnowledgeType;
}
