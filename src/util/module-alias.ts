import * as path from 'path' //importa arquivos de forma alternativa
import moduleAlias from 'module-alias'

const files = path.resolve(__dirname, '../..')

moduleAlias.addAliases({
    '@src': path.join(files, 'src'),
    '@test': path.join(files, 'test')
})
