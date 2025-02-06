export const offerRulesData = {
    'specific-collections': {
        id: 1,
        rule_name: 'Specific Collections',
        isExclusiveTo: 'specific-products',
        rule_options: [
            {
                name: 'contains any',
                value: 'contains-any',
                selected: false
            },
            {
                name: 'is not',
                value: 'is-not',
                selected: false
            }
        ],
        show_dropdown: false,
        data: [
            'Automated collection',
            'Manual collection',
            'Post collection',
        ]
    },
    'product-tags': {
        id: 1,
        rule_name: 'Product Tags',
        rule_options: [
            {
                name: 'contains any',
                value: 'contains-any',
                selected: false
            },
            {
                name: 'is not',
                value: 'is-not',
                selected: false
            }
        ],
        show_dropdown: false,
        data: [
            'Black',
            'Blue'
        ]
    },
    'specific-products': {
        id: 1,
        rule_name: 'Specific Products',
        isExclusiveTo: 'specific-collections',
        rule_options: [
            {
                name: 'equals anything',
                value: 'equals-anything',
                selected: false
            },
            {
                name: 'contains any',
                value: 'contains-any',
                selected: false
            },
            {
                name: 'is not',
                value: 'is-not',
                selected: false
            }
        ],
        data: [
            'Puma',
            'Adidas',
            'Nike',
            'Reebok'
        ]
    },
    'product-subscribed': {
        id: 1,
        rule_name: 'Product Subscribed',
        rule_options: [
            {
                name: 'Yes',
                value: 'yes',
                selected: false
            },
            {
                name: 'No',
                value: 'no',
                selected: false
            }
        ],
    },
    'specific-discount-codes': {
        id: 1,
        rule_name: 'Specific discount codes',
        rule_options: [
            {
                name: 'code',
                value: 'code',
                selected: false
            },
            {
                name: 'free',
                value: 'free',
                selected: false
            }
        ],
        isMultipleSelect: true
    },
    'cart-value-range': {
        id: 1,
        rule_name: 'Cart value range',
        rule_options: [
            {
                name: 'is equal or greater than',
                value: 'is-equal-greater-than',
                selected: false
            },
            {
                name: 'is between',
                value: 'is-between',
                selected: false
            },
            {
                name: 'is less than',
                value: 'is-less-than',
                selected: false
            }
        ],
    }
}

export const priorityOrderRules = [
    {
        label: 'Specific Collection',
        rule_name: 'specific-collections',
        priority: 0
    },
    {
        label: 'Product Tags',
        rule_name: 'product-tags',
        priority: 1
    },
    {
        label: 'Specific Products',
        rule_name: 'specific-products',
        priority: 2
    },
    {
        label: 'Product subscribed',
        rule_name: 'product-subscribed',
        priority: 3
    },
    {
        label: "Specific discount codes",
        rule_name: 'specific-discount-codes',
        priority: 4
    },
    {
        label: "Cart value range",
        rule_name: 'cart-value-range',
        priority: 5
    }
]