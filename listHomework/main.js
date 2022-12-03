/*
리스트에는 아래와 같은 형식의 데이터가 들어가야 합니다
```
{
	idx: number,
	title: string,
	content: string
}
```

저장된 리스트 예시
[{idx: 1, title: "제목", content: "내용"}, {idx: 2, title: "제목", content: "내용"}]

만들어야 하는 함수
1. addArticle(data)
	리스트에 데이터를 저장해야 합니다
	ex) {idx: 3, title: "제목", content: "내용"}을 저장
2. getArticle(idx)
	idx에 해당되는 데이터를 반환합니다
	ex) getArticle(2)
3. getArticles()
	전체 게시글을 반환해야 합니다
*/

class Node {
  constructor(title, content) {
    this.title = title;
		this.content = content;
  }
}
