import React from 'react';

import { Repository } from '../../store/ducks/repositories/types';

interface OwnProps {
    repository: Repository
}

export default function RepositoryItem({repository}: OwnProps) {
    console.log(repository);
    return <li>{repository.codigo} {repository.descricao} </li>
}