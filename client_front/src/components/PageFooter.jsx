import React from "react";

function PageFooter(props) {
	return (
		<>
			<p className="links">
				<span className="linkItem">友情链接：</span>

				<a
					href="https://github.com/veneno-o"
					target="_blank"
					rel="noreferrer"
					className="linkItem"
				>
					Mr.Chen GitHub
				</a>
				<a
					href="https://juejin.cn/user/1381457252330183"
					target="_blank"
					rel="noreferrer"
					className="linkItem"
				>
					掘金博客
				</a>
			</p>
			<p className="links">
				<span
					href="#"
					target="_blank"
					rel="noreferrer"
					className="linkItem"
				>
					QQ : 1929750203@qq.com
				</span>
				<span
					href="#"
					target="_blank"
					rel="noreferrer"
					className="linkItem"
				>
					WX : veneno_copy
				</span>
			</p>

			<p>© 2022 - Coder Station</p>
			<p>Powered by Create React App</p>
		</>
	);
}

export default PageFooter;
