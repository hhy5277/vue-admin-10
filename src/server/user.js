import {
    enumArr2Hash,
} from '@/widget/utility';

const userTable = [
    {
        id: 1,
        name: '渡边早季',
        gender: 1,
        password: '123456',
        typ: {
            index: 999,
        },
        privilege: [
            1, 2, 3, 5, 11, 123, 999,
        ],
        desc: '来自新世界的女主',
    },
    {
        id: 2,
        name: '朝比奈觉',
        gender: 0,
        password: 'qwerty',
        typ: {
            index: 99,
        },
        privilege: [
            1, 2, 3, 5,
        ],
        desc: '来自新世界的男主',
    },
    {
        id: 3,
        name: '秋月真理亚',
        gender: 1,
        password: '123456',
        typ: {
            index: 99,
        },
        privilege: [
            1, 2,
        ],
        // desc: '早季的姬友',
    },
    {
        id: 4,
        name: '伊东守',
        gender: 0,
        password: 'wwwww',
        typ: {
            index: 2,
        },
        privilege: [
            0, 1,
        ],
        desc: '~~~',
    },
    {
        id: 5,
        name: '青沼瞬',
        gender: 0,
        password: '1234567',
        typ: {
            index: 1,
        },
        privilege: [
            0,
        ],
        desc: '业魔化~',
    },

];

let id = userTable.length + 1;

const genderEnum = {
    0: '男',
    1: '女',
};

const typEnum = [
    {
        value: 0,
        label: '路人甲',
    },
    {
        value: 1,
        label: '店小二',
    },
    {
        value: 2,
        label: '收银员',
    },
    {
        value: 99,
        label: '店掌柜',
    },
    {
        value: 999,
        label: '管理员',
    },
];

function getTypEnum (cb) {
    cb(typEnum);
}

const typHash = enumArr2Hash(typEnum);

const privilegeEnum = [
    {
        id: 1,
        name: '游客',
    },
    {
        id: 2,
        name: '打杂',
    },
    {
        id: 3,
        name: '跑堂',
    },
    {
        id: 5,
        name: '财务',
    },
    {
        id: 11,
        name: '店长',
    },
    {
        id: 123,
        name: '客服',
    },
    {
        id: 999,
        name: '关小黑屋',
    },
];

function getPrivilege (cb, data) {
    const typ = data.typ.index;
    let rst;
    switch (typ) {
    case 0:
        rst = privilegeEnum.slice(0, 1);
        break;
    case 1:
        rst = privilegeEnum.slice(0, 2);
        break;
    case 2:
        rst = privilegeEnum.slice(0, 4);
        break;
    case 99:
        rst = privilegeEnum.slice(0, -2);
        break;
    case 999:
        rst = privilegeEnum.slice(0);
        break;
    default:
        rst = [];
    }
    cb(rst);
}

const createFields = [
    'name',
    'password',
    'gender',
    'typ',
    'privilege',
    'desc',
];

function getCreateFields (cb) {
    cb(createFields);
}

function createUser (cb, data) {
    data.id = id++;
    userTable.push(data);
    cb();
}

function getUserList (cb, params) {
    const data = JSON.parse(JSON.stringify(userTable));
    const fieldList = [
        'name', 'gender', 'typ', 'password',
    ];
    const total = data.length;

    cb({
        data,
        fieldList,
        total,
    });
}

const detailFields = [
    [
        'name',
    ],
    [
        'gender', 'typ',
    ],
    [
        'desc',
    ],
];

function getUserDetail (cb, data) {
    const id = data.id;

    for (const item of userTable) {
        if (item.id === id) {
            cb({
                fieldLayoutList: detailFields,
                record: JSON.parse(JSON.stringify(item)),
            });
            return;
        }
    }
}

const editFields = [
    'name',
    'password',
    'gender',
    'typ',
    'privilege',
    'desc',
];

function getEditUserInfo (cb, data) {
    const id = data.id;
    for (const item of userTable) {
        if (item.id === id) {
            cb({
                editableFields: JSON.parse(JSON.stringify(editFields)),
                record: JSON.parse(JSON.stringify(item)),
            });
            return;
        }
    }
}

function editUser (cb, data) {
    for (let i = 0; i < userTable.length; i++) {
        if (userTable[i].id === data.id) {
            userTable[i] = data;
        }
    }
    cb();
}

function delUser (cb, data) {
    const id = data.id;
    for (const index in userTable) {
        if (userTable[index].id === id) {
            userTable.splice(index, 1);
        }
    }
    cb();
}

export {
    genderEnum,
    typEnum,
    typHash,
    getPrivilege,
    getCreateFields,
    createUser,
    getUserList,
    getUserDetail,
    getEditUserInfo,
    editUser,
    delUser,
    getTypEnum,
};
