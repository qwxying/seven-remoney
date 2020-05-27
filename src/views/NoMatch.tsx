import {Link} from 'react-router-dom';
import React from 'react';

function NoMatch() {
  return <div>
    <Link to='/home'>当前页面不存在，点击返回首页</Link>
  </div>;
}
export default NoMatch;