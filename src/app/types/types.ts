export interface BlogData {
  id: number;
  username: String;
  user_id: number;
  title: String;
  content: String;
  tags: Tag[]; // 多対多のリレーション
  createdAt: Date;
}

export interface Tag {
  id: number;
  name: String;
}