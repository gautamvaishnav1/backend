const {body}=require('express-validator')

exports.authUserRegisterValidator=[
    body('fullName')
    .isLength({min:3})
    .withMessage('full name at least 3 character long'),

    body('email')
    .isEmail()
    .withMessage('please give a valid email'),

    body('password')
    .isLength({min:6})
    .withMessage('password must be 6 character long')
];

exports.authUserLoginValidator=[
    body('email')
    .isEmail()
    .withMessage('give a valid email'),

    body('password')
    .isLength({min:6})
    .withMessage('password must be 6 character long')

];

exports.authFoodPartnerRegisterValidator=[
    body('fullName')
    .isLength({min:3})
    .withMessage('full name must be 3 character long'),

    body('email')
    .isEmail()
    .withMessage('please give a valid email') ,

    body('password')
    .isLength({min:6})
    .withMessage('password must be 6 character long'),

    body('phoneNumber')
    .isNumeric()
    .withMessage('enter only numbers')
    .isLength({min:10,max:10})
    .withMessage('number must be 10 digits '),

    body('address')
    .isLength({min:10})
    .withMessage('give a valid address')
]

exports.authFoodPartnerLoginValidator=[
    body('email')
    .isEmail()
    .withMessage('please give a valid email'),

    body('password')
    .isLength({min:6})
    .withMessage('password must be 6 character long')


]