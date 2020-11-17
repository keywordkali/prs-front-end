import { Pipe, PipeTransform } from '@angular/core';
import { User } from './user.class';

@Pipe({
  name: 'userSearch'
})
export class UserSearchPipe implements PipeTransform {

  transform(users: User[], searchCriteria: string = ''): User[]  {
    if(searchCriteria == "")
    return users;
    searchCriteria = searchCriteria.toLowerCase();
    let selectedUsers: User[] = [];
    for(let user of users){
if(user.id.toString().includes(searchCriteria)){
  selectedUsers.push(user);
  continue;
}
if(user.userName.toLowerCase().includes(searchCriteria)){
  selectedUsers.push(user);
  continue;
}
if(user.firstName.toLowerCase().includes(searchCriteria)){
  selectedUsers.push(user);
  continue;
}
if(user.lastName.toLowerCase().includes(searchCriteria)){
  selectedUsers.push(user);
  continue;
}
if(user.phoneNumber.toLowerCase().includes(searchCriteria)){
  selectedUsers.push(user);
  continue;
}
if(user.email.toLowerCase().includes(searchCriteria)){
  selectedUsers.push(user);
  continue;
}

    }
    return selectedUsers;
  }

}