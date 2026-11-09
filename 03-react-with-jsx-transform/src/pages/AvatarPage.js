
import React, {createElement as h} from '../lib/react.js';
import { Avatar } from "../components/avatar/Avatar.js";


export class AvatarPage extends React.Component {
  
  render(){
    return h(
      'ul',
      { className: 'avatarList' },
      h(Avatar,{name:'짱구',status:'online'}),
      h(Avatar,{name:'짱아',status:'dont-disturb'}),
      h(Avatar,{name:'신형만',status:'online'}),
      h(Avatar,{name:'철수',status:'away'}),
    )
  }
}
