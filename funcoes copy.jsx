export const NodeService = {
    getTreeNodesData() {
        return [
            {
                "key": 1,
                "label": "ADMINISTRATIVO",
                "value": "ADMINISTRATIVO",
                "children": [
                    {
                        "key": 1,
                        "label": "Gerente",
                        "value": "Gerente",
                        "children": [
                            {
                                "key": 1,
                                "label": "Nível 1",
                                "value": "Nível 1",
                                "children": [
                                    {
                                        "key": 1,
                                        "label": "",
                                        "value": ""
                                    },
                                ]
                            },
                            {
                                "key": 2,
                                "label": "Nível 1",
                                "value": "Nível 2",
                                "children": [
                                    {
                                        "key": 1,
                                        "label": "",
                                        "value": ""
                                    },
                                ]
                            },
                            {
                                "key": 3,
                                "label": "Nível 3",
                                "value": "Nível 3",
                                "children": [
                                    {
                                        "key": 1,
                                        "label": "",
                                        "value": ""
                                    },
                                ]
                            },
                            {
                                "key": 4,
                                "label": "Nível 4",
                                "value": "Nível 4",
                                "children": [
                                    {
                                        "key": 1,
                                        "label": "",
                                        "value": ""
                                    },
                                ]
                            },
                            
                        ]
                    },
                ]
            },
        ]   
    },

    getTreeNodes() {
        return Promise.resolve(this.getTreeNodesData());
    }
}