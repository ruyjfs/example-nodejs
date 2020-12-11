import Index from '../controllers/index'
import V1 from './v1'

export default function routes(app) {
    app.get('/', Index().index);
    app.use('/v1', V1)
}