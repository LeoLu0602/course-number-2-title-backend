"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const supabase_js_1 = require("@supabase/supabase-js");
require("dotenv/config");
const PORT = process.env.PORT || 3001;
const app = (0, express_1.default)();
const cors = require('cors');
const supabase = (0, supabase_js_1.createClient)((_a = process.env.SUPABASE_URL) !== null && _a !== void 0 ? _a : '', (_b = process.env.SUPABASE_KEY) !== null && _b !== void 0 ? _b : '');
app.use(cors());
app.get('/api/v1/courses', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { school, department, courseNumber } = req.query;
    const courseTitle = yield getCourseTitle(school, department, courseNumber);
    res.json({ courseTitle });
}));
function getCourseTitle(school, department, courseNumber) {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function* () {
        const { data, error } = yield supabase
            .from('course')
            .select('*')
            .eq('school', school)
            .eq('department', department)
            .eq('course_number', courseNumber);
        if (error) {
            console.error('getCourseTitle Error:', error);
            return '';
        }
        return (_b = (_a = data === null || data === void 0 ? void 0 : data[0]) === null || _a === void 0 ? void 0 : _a.course_title) !== null && _b !== void 0 ? _b : '';
    });
}
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
