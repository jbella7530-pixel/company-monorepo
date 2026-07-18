import type {
  KnowledgeCreateInput,
  KnowledgeItem,
} from "./types";

const knowledge: KnowledgeItem[] = [];

export function addKnowledge(
  input: KnowledgeCreateInput
): KnowledgeItem {
  const item: KnowledgeItem = {
    id: crypto.randomUUID(),
    title: input.title,
    content: input.content,
    type: input.type,
    createdAt: new Date(),
  };

  knowledge.push(item);

  return item;
}

export function listKnowledge(): KnowledgeItem[] {
  return knowledge;
}
