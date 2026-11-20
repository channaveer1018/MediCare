import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getTableName(tableName: string): string {
  const projectId = "fc1e8d58-552d-4e1f-9e24-90018387db9f" || "";
  if (!projectId) {
    return tableName;
  }
  return `${projectId.replace(/-/g, "_")}_${tableName}`;
}
