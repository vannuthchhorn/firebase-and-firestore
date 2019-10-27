database.collection('teacher').get().then((data)=>{
    const table = document.querySelector('table');
    data.forEach(item => {
        table.innerHTML+=`
            <tr>
                <td>${item.data().name}</td>
                <td>${item.data().age}</td>
                <td>
                    <i class="material-icons text-danger"
                    style="cursor:pointer"
                    id="${item.id}" onclick="delTeacher('${item.id}')">delete</i>
                </td>
            </tr>
        `;
    });
});
function delTeacher(teaId) {
    database.collection('teacher').doc(teaId).delete();
}
const btnAdd = document.querySelector('button');
btnAdd.addEventListener('click',function(){
    var name = document.getElementById('name').value;
    var age = document.getElementById('age').value;
    database.collection('teacher').add({
         name:name,
         age:age
    });
});